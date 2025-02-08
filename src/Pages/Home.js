//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";

import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Library from "../Sections/Library";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Library />
      {/* <Services /> */}
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
