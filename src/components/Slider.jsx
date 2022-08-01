import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => {
    return props.dir === "left" && "10px";
  }};
  right: ${(props) => {
    return props.dir === "right" && "10px";
  }};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div`
  transition: all 1s ease-out;
  height: 100%;
  display: flex;
  transform: translateX(
    ${(props) => {
      return +props.index * -100;
    }}vw
  );
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => {
      return props.bg;
    }};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex((prev) => {
        return prev > 0 ? prev - 1 : sliderItems.length - 1;
      });
    } else {
      setSlideIndex((prev) => {
        return prev < sliderItems.length - 1 ? prev + 1 : 0;
      });
    }
  };
  return (
    <Container>
      <Arrow
        dir="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper index={slideIndex}>
        {sliderItems.map((item, i) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow
        dir="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
