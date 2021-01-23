import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import ProductItem from "../../@components/ProductItem/ProductItem";
import { getProducts } from "../../@store/product/ProductActions";
import Loader from "../../@components/Loader/Loader";
import classes from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.product.products
  );
  console.log(productsData);
  const productsLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.product.loading
  );

  useEffect(() => {
    dispatch(getProducts());
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
        <div className={classes.homeContainer}>
          {productsData &&
            productsData.length > 0 &&
            productsData.map((singleProduct) => {
              return (
                <ProductItem
                  productDescription={singleProduct.description}
                  productImage={
                    "https://meet-your-needs-api.herokuapp.com/api/" +
                    singleProduct.image
                  }
                  productCategory={singleProduct.category}
                  productTitle={singleProduct.title}
                  userId={singleProduct.userId}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Home;
