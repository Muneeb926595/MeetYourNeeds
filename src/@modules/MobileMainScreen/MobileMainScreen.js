import React, { useEffect } from "react";

import classes from "./MobileMainScreen.module.css";

const MobileMainScreen = (props) => {
  useEffect(() => {
    if (
      localStorage.getItem("userId") &&
      localStorage.getItem("access_token")
    ) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <div className={classes.mobileMainScreen}>
      <div className={classes.mobileMainScreenContainer}>
        <div className={classes.mobileMainScreen__content}>
          <div className={classes.mobileMainScreen__appNameContainer}>
            <p className={classes.mobileMainScreen__appName}>MeedYourNeeds</p>
          </div>
          <div className={classes.mobileMainScreen__buttonsContainer}>
            <button
              onClick={() => props.history.push("/login")}
              className={classes.mobileMainScreen__customeButton}
            >
              Log in
            </button>
            <div className={classes.mobileMainScreen__upperPartSpliter}>
              <div className={classes.mobileMainScreen__horizentalLine}></div>
              <span style={{ margin: "0px 4px", color: "#ffffff" }}>OR</span>
              <div className={classes.mobileMainScreen__horizentalLine}></div>
            </div>
            <button
              onClick={() => props.history.push("/signup")}
              className={classes.mobileMainScreen__customeButton}
            >
              Register?
            </button>
          </div>
        </div>
        <div className={classes.mobileMainScreen__rulesContainer}>
          <a href="#" className={classes.mobileMainScreen__rules}>
            Privacy Policy
          </a>
          <a href="#" className={classes.mobileMainScreen__rules}>
            Terms And Conditions
          </a>
          <a href="#" className={classes.mobileMainScreen__rules}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMainScreen;
