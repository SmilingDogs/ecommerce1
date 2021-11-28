import React from "react";
import Home from "../pages/Home"
import ProductList from "../pages/ProductList"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import Register from "../pages/Register"
import Login from "../pages/Login"
import { Switch, Route, Redirect } from "react-router-dom";
import Success from "../pages/Success";
import {useSelector} from "react-redux"
import {userSelector} from "../redux/selectors/userSelector"

const AppRoutes = () => {

  const {currentUser} = useSelector(userSelector)

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products/:category">
        <ProductList />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/register">{currentUser ? <Redirect to="/" /> : <Register />}</Route>
      <Route path="/login">{currentUser ? <Redirect to="/" /> : <Login />}</Route>
    </Switch>
  );
}

export default AppRoutes;
