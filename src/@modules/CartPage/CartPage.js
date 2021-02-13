import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../../@components/CartProductCard/CartProductCard";

import classes from "./CartPage.module.css";

const CartPage = () => {
  const cartData = useSelector(({ MeedYourNeeds }) => MeedYourNeeds.auth.cart);

  const [localCartData, setLocalCartData] = useState(cartData);

  useEffect(() => {
    setLocalCartData(cartData);
  }, [cartData]);

  return (
    <div className={classes.cartPageContainer}>
      {localCartData &&
        localCartData.length > 0 &&
        localCartData.map((singleProduct) => {
          return (
            <CartProductCard
              productId={singleProduct._id}
              productDescription={singleProduct.description}
              // productImage={"http://localhost:3000/api/" + singleProduct.image}
              productImage={
                "https://meet-your-needs-api.herokuapp.com/api/" +
                singleProduct.image
              }
              productCategory={singleProduct.category}
              productTitle={singleProduct.title}
              productPrice={singleProduct.price}
              userId={singleProduct.userId}
            />
          );
        })}
    </div>
  );
};

export default CartPage;
