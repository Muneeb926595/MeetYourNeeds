import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { submitLogin } from "../../@store/auth/AuthActions";
import CustomLoader from "../../@components/CustomeLoader/CustomeLoader";
import classes from "./Login.module.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.auth.loading
  );
  useEffect(() => {
    if (
      localStorage.getItem("userId") &&
      localStorage.getItem("access_token")
    ) {
      history.push("/home");
    }
  }, [history]);
  return (
    <>
      <CustomLoader loading={userLoading}>
        <div className={classes.login}>
          <div className={classes.login__content}>
            <div className={classes.login__appNameContainer}>
              <p className={classes.login__appName}>MeedYourNeeds</p>
            </div>
            <form
              className={classes.login__loginForm}
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(
                  submitLogin(
                    {
                      userName: username,
                      password: password,
                    },
                    history
                  )
                );
              }}
            >
              <input
                className={classes.login__customInputField}
                value={username}
                placeholder="Username"
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={classes.login__customInputField}
                value={password}
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className={classes.login__customeButton}>
                Log in
              </button>
              <p className={classes.login__forgotPassword}>
                Forgot your password?
              </p>
            </form>
            <div className={classes.login__signUpLink}>
              <p>
                Don't have an account?
                <Link to="/signup" className={classes.login__signupLinkText}>
                  {" "}
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </CustomLoader>
    </>
  );
};

export default Login;
