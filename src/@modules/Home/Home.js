import React from "react";

import ProductItem from "../../@components/ProductItem/ProductItem";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default Home;
