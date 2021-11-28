import styled from "styled-components/macro";
import { mobile } from "../../responsive";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${mobile({ height: "30vh" })}

`;
export const Container = styled.li`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${Image} {
      transform: translateY(-15px)
    }
  }
`;
export const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
`;
