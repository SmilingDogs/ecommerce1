import styled from "styled-components/macro";
import {mobile} from "../../responsive";

export const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  ${mobile({ textAlign: "center"})}
`;

