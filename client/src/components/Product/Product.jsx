import React from "react";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Container, Circle, Image, Info, Icon } from "./ProductStyles";


const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{color: "#fff"}} />
        </Icon>
        <Icon>
          <Link to={`/product/${product._id}`}>
          <SearchOutlined style={{color: "#fff"}} />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={{color: "#fff"}} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
