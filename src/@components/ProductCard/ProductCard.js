import React from "react";

import classes from "./ProductCard.module.css";

const ProductCard = ({
  index,
  productTitle,
  productPrice,
  productDescription,
  productImage,
  productCategory,
}) => {
  return (
    <div
      className={
        index % 2 === 0
          ? classes.evenProductCardContainer
          : classes.oddProductCardContainer
      }
    >
      <div className={classes.productInfoContainer}>
        <div className={classes.productCategory}>{productCategory}</div>
        <div className={classes.productName}>{productTitle}</div>
        <div className={classes.productDescription}>{productDescription}</div>
        <div className={classes.productPrice}>Rs. {productPrice}</div>
      </div>
      <div className={classes.productImageContainer}>
        <img src={productImage} className={classes.productImage} />
      </div>
    </div>
  );
};

export default ProductCard;
