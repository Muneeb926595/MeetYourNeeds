import React from "react";

import userPlaceHolder from "../../assets/Images/userPlaceHolder.jpg";
import classes from "./ProductItem.module.css";

const ProductItem = ({ productTitle, productDescription, productImage }) => {
  return (
    <>
      <div className={classes.productItemContainer}>
        <div className={classes.productItemContainer__header}>
          <div className={classes.productItemContainer__userInfo}>
            <div className={classes.productItemContainer__userImageContainer}>
              <img
                alt="userImage"
                className={classes.productItemContainer__userImage}
                src={userPlaceHolder}
              />
            </div>
            <div className={classes.productItemContainer__userInfoContainer}>
              <p className={classes.productItemContainer__userName}>userName</p>
              <p className={classes.productItemContainer_Time}>time</p>
            </div>
          </div>
        </div>
        <div className={classes.productItemContainer__productTitle}>
          <p className={classes.productItemContainer__titleHeading}>Title:</p>
          <p>{productTitle}</p>
        </div>
        <div className={classes.productItemContainer__postImageContainer}>
          <img
            src={productImage}
            alt="PostImage"
            className={classes.postImage}
          />
        </div>

        <div className={classes.productItemContainer__postBottom}>
          <div
            className={classes.productItemContainer__userProfileNameContainer}
          >
            <p className={classes.textproductItemContainer__descriptionTitle}>
              Descrption:
            </p>
            <p className={classes.textproductItemContainer__postText}>
              {productDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
