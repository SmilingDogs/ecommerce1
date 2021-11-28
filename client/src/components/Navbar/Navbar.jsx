import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import { userSelector } from "../../redux/selectors/userSelector";
import { Header, Container, Left, Language, SearchContainer, Input, Center, Logo, LogoImageContainer, LogoImage, Right, MenuItem} from "./NavbarStyles"


const Navbar = () => {
  const {quantity} = useSelector((state) => state.cart);
  const {currentUser} = useSelector(userSelector);
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
