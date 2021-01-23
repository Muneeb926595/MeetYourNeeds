import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { submitRegister } from "../../@store/auth/AuthActions";
import CustomLoader from "../../@components/CustomeLoader/CustomeLoader";
import classes from "./Signup.module.css";

const Signup = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userLoading = useSelector(
    ({ MeedYourNeeds }) => MeedYourNeeds.auth.loading
  );
  const dispatch = useDispatch();
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
        <div className={classes.signup}>
          <div className={classes.signup__content}>
            <div className={classes.signup__appNameContainer}>
              <p className={classes.signup__appName}>MeedYourNeeds</p>
            </div>
            <form
              className={classes.signup__signupForm}
              onSubmit={(event) => {
                event.preventDefault();
                dispatch(
                  submitRegister(
                    {
                      fullName: fullname,
                      userName: username,
                      email: email,
                      password: password,
                    },
                    history
                  )
                );
              }}
            >
              <input
                className={classes.signup__customInputField}
                value={email}
                placeholder="Email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={classes.signup__customInputField}
                value={fullname}
                placeholder="Fullname"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                className={classes.signup__customInputField}
                value={username}
                placeholder="Username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className={classes.signup__customInputField}
                value={password}
                id="password"
                type="password"
                placeholder="Password"
                minlength="6"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className={classes.signup__customInputField}
                value={confirmPassword}
                type="password"
                id="confirm_password"
                placeholder="Confirm Password"
                required
                onChange={(e) => {
                  setConfirmPassword(e.target.value);

                  let password = document.getElementById("password"),
                    confirm_password = document.getElementById(
                      "confirm_password"
                    );

                  function validatePassword() {
                    if (password.value !== confirm_password.value) {
                      confirm_password.setCustomValidity(
                        "Passwords Don't Match"
                      );
                    } else {
                      confirm_password.setCustomValidity("");
                    }
                  }

                  password.onchange = validatePassword;
                  confirm_password.onkeyup = validatePassword;
                }}
              />
              <button className={classes.signup__customeButton} type="submit">
                Signup
              </button>
            </form>
            <div className={classes.signup__loginLink}>
              <p>
                Have an account?
                <Link to="/login" className={classes.signup__loginLinkText}>
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </CustomLoader>
    </>
  );
};
export default Signup;
