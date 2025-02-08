import { useState, useEffect } from "react";
import axios from "axios";
import "./demo.css";

const VirtualTryOnComponent = () => {
  const [personImage, setPersonImage] = useState(null);
  const [clothImage, setClothImage] = useState(null);
  const [finalImage, setFinalImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [personImageUrl, setPersonImageUrl] = useState(null);
  const [clothImageUrl, setclothImageUrl] = useState(null);

  const handlePersonImageChange = (event) => {
    const pfile = event.target.files[0];
    setPersonImage(pfile);
    setPersonImageUrl(URL.createObjectURL(pfile)); // Extracting URL here
  };

  const handleClothImageChange = (event) => {
    const cfile = event.target.files[0];
    setClothImage(cfile);
    setclothImageUrl(URL.createObjectURL(cfile)); // Set the cloth image URL
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("personImage", personImage);
    formData.append("clothImage", clothImage);

    const options = {
      method: "POST",
      url: "https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon",
      headers: {
        "X-RapidAPI-Key": "5a6be78dc2msh1accf98c62ec5bbp1caedbjsnaf2019967a90",
        "X-RapidAPI-Host": "virtual-try-on2.p.rapidapi.com",
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    setLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setFinalImage(response.data.response.ouput_path_img); // Assuming API returns the final image URL
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(finalImage);
  }, [finalImage]);

  return (
    <div className="upload-container">
      <h1>Virtual Try-On</h1>
      <form onSubmit={handleSubmit}>

        <div className="person-image">
          <label>Upload Person Image:</label>
          <input type="file" onChange={handlePersonImageChange} />
          {personImageUrl && (<img src={personImageUrl} alt="Person Image" />)}
        </div>

        <div className="cloth-image">
          <label>Upload Cloth Image:</label>
          <input type="file" onChange={handleClothImageChange} />
          {clothImageUrl && <img src={clothImageUrl} alt="cloth image" />}
        </div>

        <button type="submit" disabled={!personImage || !clothImage || loading}>
          {loading ? "Loading..." : "Try On"}
        </button>
    </form>
    
      {finalImage && (
        <div>
          <h2>Final Image:</h2>
          <img src={finalImage} alt="Final Image" />
        </div>
      )}
    </div>
  );
};

export default VirtualTryOnComponent;
