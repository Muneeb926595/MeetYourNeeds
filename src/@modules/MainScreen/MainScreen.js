import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import classes from "./MainScreen.module.css";

const MainScreen = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (
      localStorage.getItem("userId") &&
      localStorage.getItem("access_token")
    ) {
      history.push("/home");
    }
  }, []);
  return (
    <div className={classes.MainScreen}>
      <div className={classes.MainScreenContainer}>
        <div className={classes.MainScreen__content}>
          <div className={classes.MainScreen__appNameContainer}>
            <p className={classes.MainScreen__appName}>MeedYourNeeds</p>
          </div>
          <div className={classes.MainScreen__buttonsContainer}>
            <button
              onClick={() => props.history.push("/login")}
              className={classes.MainScreen__customeButton}
            >
              Log in
            </button>
            <div className={classes.MainScreen__upperPartSpliter}>
              <div className={classes.MainScreen__horizentalLine}></div>
              <span style={{ margin: "0px 4px", color: "#ffffff" }}>OR</span>
              <div className={classes.MainScreen__horizentalLine}></div>
            </div>
            <button
              onClick={() => props.history.push("/signup")}
              className={classes.MainScreen__customeButton}
            >
              Register?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
