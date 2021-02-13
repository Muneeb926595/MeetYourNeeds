import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  addToCartLocally,
  removeFromCart,
  removeFromCartLocally,
} from "../../@store/auth/AuthActions";
import classes from "./ProductCard.module.css";

const ProductCard = ({
  index,
  productId,
  productTitle,
  productPrice,
  productDescription,
  productImage,
  productCategory,
}) => {
  const dispatch = useDispatch();
  const [alreadyAddedToCart, setAlreadyAddedToCart] = useState(false);

  const cartData = useSelector(({ MeedYourNeeds }) => MeedYourNeeds.auth.cart);

  useEffect(() => {
    cartData.map((singleProduct) => {
      if (productId === singleProduct?.cart?._id) {
        setAlreadyAddedToCart(true);
      }
    });
  }, [productId, cartData]);
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
      <Button
        variant="contained"
        color={alreadyAddedToCart ? "secondary" : "primary"}
        disableElevation
        onClick={() => {
          if (!alreadyAddedToCart) {
            dispatch(addToCart(productId));
            dispatch(
              addToCartLocally(
                productId,
                productTitle,
                productPrice,
                productDescription,
                productImage,
                productCategory
              )
            );
          } else {
            dispatch(removeFromCart(productId));
            dispatch(removeFromCartLocally(productId));
          }
          setAlreadyAddedToCart(!alreadyAddedToCart);
        }}
        className={classes.addToCartButton}
      >
        {alreadyAddedToCart ? "ADDED TO CART" : "ADD TO CARD"}
      </Button>
    </div>
  );
};

export default ProductCard;
