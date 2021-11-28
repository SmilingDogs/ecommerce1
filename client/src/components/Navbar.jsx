import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";

const Header = styled.header`
  /* height: 60px; */
  background-color: #1b2d7f;
  /* ${mobile({ height: "50px" })} */
`;

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 30px 0px;
  ${mobile({ padding: "10px 0px" })}
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center", marginRight: "10px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })};
`;
const Input = styled.input`
  border: none;
  font-size: 16px;
  ${mobile({ width: "75px" })};
`;
const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
  ${mobile({ display: "none" })}
`;
const LogoImageContainer = styled.div``;
const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
  object-position: 3px 0px;
`;
const MenuItem = styled.div`
  font-size: 15px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  const {quantity} = useSelector((state) => state.cart);
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const onSignOut = () => {
    logout(dispatch)

  }


  return (
    <Header>
      <Container>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>Smiling Dog's</Logo>
          </Link>
          <LogoImageContainer>
            <LogoImage src="https://res.cloudinary.com/blackie2020/image/upload/v1635688750/Smiling_dog_g0qx1e.jpg" />
          </LogoImageContainer>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          {!currentUser ? (
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          ) : (
            <>
            <MenuItem>Hello, {currentUser.username}!</MenuItem>
            <Link to="/">
              <MenuItem onClick={onSignOut}>SIGN OUT</MenuItem>
            </Link>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{ fontSize: 35 }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Container>
    </Header>
  );
};

export default Navbar;
