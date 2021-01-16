import React from "react";

import userPlaceHolder from "../../assets/Images/userPlaceHolder.jpg";
import postImage from "../../assets/Images/postImage.jpg";
import classes from "./ProductItem.module.css";

const ProductItem = () => {
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
        <div className={classes.productItemContainer__postImageContainer}>
          <img src={postImage} alt="PostImage" className={classes.postImage} />
        </div>

        <div className={classes.productItemContainer__postBottom}>
          <div
            className={classes.productItemContainer__userProfileNameContainer}
          >
            <p className={classes.textproductItemContainer__postText}>
              postDescription
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
