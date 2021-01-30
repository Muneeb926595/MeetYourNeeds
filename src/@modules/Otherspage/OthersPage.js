import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { getProductsByCategory } from "../../@store/product/ProductActions";
import Loader from "../../@components/Loader/Loader";
import classes from "./OthersPage.module.css";
import ProductCard from "../../@components/ProductCard/ProductCard";

function OthersPage() {
  const dispatch = useDispatch();
  const productsData = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.product.products
  );
  const productsLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.product.loading
  );

  useEffect(() => {
    dispatch(getProductsByCategory("Other"));
  }, [dispatch]);
  return (
    <>
      {productsLoading ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className={classes.otherspageContainer}>
          {productsData &&
            productsData.length > 0 &&
            productsData.map((singleProduct, index) => {
              return (
                <ProductCard
                  index={index}
                  productDescription={singleProduct.description}
                  // productImage={
                  //   "http://localhost:3000/api/" + singleProduct.image
                  // }
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
      )}
    </>
  );
}

export default OthersPage;