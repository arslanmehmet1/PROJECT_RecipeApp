import React from "react";
import { Container, HomeImg, ImgDiv } from "./About.style";
import IMG_0530 from "../../assets/IMG_0530.JPG";
import IMG_0338 from "../../assets/IMG_0338.JPG";
import AGZA6920 from "../../assets/AGZA6920.JPG";

const About = () => {
  return (
    <Container>
      <p>We like eating so much. We are happy while eating something</p>

      <ImgDiv>
        <HomeImg src={IMG_0530} />
        <HomeImg src={AGZA6920} />
        <HomeImg src={IMG_0338} />
      </ImgDiv>
    </Container>
  );
};

export default About;
