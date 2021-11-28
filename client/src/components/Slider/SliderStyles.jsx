import styled from "styled-components/macro";
import {mobile} from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden; //todo when some part of elements are overflowing!!!
  ${mobile({ display: "none" })}

`;

export const Arrow = styled.div`
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

`
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

`
export const Image = styled.img`
  height: 80%;
  border-radius: 20px;

`
export const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
`
export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 0 20px 0 0;
`
export const Button = styled.button`
 text-transform: uppercase;
 padding: 10px;
 font-size: 20px;
 cursor: pointer;
 background-color: black;
 color: white;
 border-radius: 8px;

`
