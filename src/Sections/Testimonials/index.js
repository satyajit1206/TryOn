import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Tryon makes online shopping with friends so much more fun! We can virtually try on clothes together, give each other feedback, and create a whole shopping party atmosphere."
            name="-- Arya"
            image="avatar-1"
          />

          <Card
            text="Tryon is a game-changer! No more endless online shopping returns. I can now virtually try on clothes and see how they fit before I buy. It's so convenient and accurate, it's like having a personal stylist at home!" 
            name="-- Sarthak"
            image="avatar-2"
          />

          <Card
            text="Tryon has revolutionized my online shopping experience. No more guesswork about sizing! Now, I can confidently buy clothes online knowing they'll fit perfectly."
            name="-- Sunidhi"
            image="avatar-3"
          />

          <Card
            text="While Tryon is a cool concept, the selection of clothes available is still limited. Hopefully, more brands will hop on board soon so I can virtually try on all my favorite styles."
            name="-- Nalla shrinath"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
