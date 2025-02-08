import React, { useEffect, useRef } from "react";
import './index.css';
import bucket1Image from '../../assets/bucket1.jpg';
import overshirt1Image from '../../assets/overshirt1.jpg';
import trousers1Image from '../../assets/trousers1.jpeg';
import trousers2Image from '../../assets/sleev1.jpeg';
import trousers3Image from '../../assets/ribbed1.jpg';
import trousers4Image from '../../assets/slogan1.jpg';


function Library() {
  const libraryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view"); // Add class for animation
      }
    });

    observer.observe(libraryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="library-container" ref={libraryRef} >
      <div className="heading">
        <h1>Our Library</h1>
      </div>
      <div className="container">
        <div className="card animated-card image-hover-1">
          <img src={bucket1Image} alt="Bucket 1 Image" style={{ borderRadius: '20px' }} />
        </div>
        <div className="card animated-card image-hover-2">
          <img src={overshirt1Image} alt="Overshirt 1 Image" style={{ borderRadius: '20px' }} />
        </div>
        <div className="card animated-card image-hover-3">
          <img src={trousers1Image} alt="Trousers 1 Image" style={{ borderRadius: '20px' }} />
        </div>
      </div>

      <div id="Library"></div>
      <div className="container">
        <div className="card animated-card image-hover-1">
          <img src={trousers4Image} alt="Bucket 1 Image" style={{ borderRadius: '20px' }} />
        </div>
        <div className="card animated-card image-hover-2">
          <img src={trousers2Image} alt="Overshirt 1 Image" style={{ borderRadius: '20px' }} />
        </div>
        <div className="card animated-card image-hover-3">
          <img src={trousers3Image} alt="Trousers 1 Image" style={{ borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  );
}

export default Library;
