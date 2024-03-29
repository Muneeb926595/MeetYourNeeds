import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { getProducts } from "../../@store/product/ProductActions";
import Loader from "../../@components/Loader/Loader";
import classes from "./Home.module.css";
import ProductCard from "../../@components/ProductCard/ProductCard";
import { getCart } from "../../@store/auth/AuthActions";

const Home = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(
    ({ MeetYourNeeds }) => MeetYourNeeds.product.products
  );
  const productsLoading = useSelector(
    ({ MeetYourNeeds }) => MeetYourNeeds.product.loading
  );

  useEffect(() => {
    dispatch(getCart());
  }, []);

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
            productsData.map((singleProduct, index) => {
              return (
                <ProductCard
                  index={index}
                  productId={singleProduct._id}
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
                  phoneNo={singleProduct.phoneNo}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Home;
