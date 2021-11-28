import styled from 'styled-components/macro';
import {mobile} from "../../responsive";

export const Header = styled.header`
  /* height: 60px; */
  background-color: #1B2D7F;
  /* ${mobile({height: "50px"})} */
`;

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 30px 0px;
  ${mobile({ padding: "10px 0px"})}
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center", marginRight: "10px" })}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};

`
export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })};

`
export const Input = styled.input`
  border: none;
  font-size: 16px;
  ${mobile({ width: "75px" })};
`
export const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
  ${mobile({ display: "none" })}

`
export const LogoImageContainer = styled.div`


`
export const LogoImage = styled.img`

  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
  object-position: 3px 0px;

`
export const MenuItem = styled.div`
  font-size: 15px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`
