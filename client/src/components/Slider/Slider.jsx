import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { sliderItems } from "../../data";
import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Slide,
  Title,
  Description,
  Button,
} from "./SliderStyles";

// import { mobile } from "../responsive";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const endIndex = sliderItems.length - 1;
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : endIndex);
    } else {
      setSlideIndex(slideIndex < endIndex ? slideIndex + 1 : 0);
    }
  };

  const slides = sliderItems.map((item) => (
    <Slide key={item.id} bg={item.bg}>
      <ImgContainer>
        <Image src={item.img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Description>{item.desc}</Description>
        <Button>Buy now</Button>
      </InfoContainer>
    </Slide>
  ));

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>{slides}</Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

