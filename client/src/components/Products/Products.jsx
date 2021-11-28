import React, { useEffect, useState } from "react";
import { Container } from "./ProductsStyles";
import Product from "../Product/Product";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  //todo we passed category, filters, sort here to fetch product data from backend according to client selection

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //todo now we need 1st UseEffect - to make an API calls for category products or All products

  useEffect(() => {

      axios(
        category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products"
      )
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));


  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((p) =>
          Object.entries(filters).every(([key, value]) =>
            p[key].includes(value)
          )
        )
      );
  }, [products, filters, category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((p) => <Product product={p} key={p._id} />)
        : products.slice(0, 8).map((p) => <Product product={p} key={p._id} />)}
    </Container>
  );
};

export default Products;
