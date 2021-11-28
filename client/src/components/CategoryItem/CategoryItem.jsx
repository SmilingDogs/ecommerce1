import React from "react";
import {Link} from "react-router-dom"
import { Button, Container, Image, Info, Title } from "./CategoryItemStyles";

const CategoryItem = ({ img, title, cat}) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Link to={`/products/${cat}`}>
        <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
