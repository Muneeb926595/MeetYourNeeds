import { toast } from "react-toastify";

import {
  getUserByIdUrl,
  loginUserUrl,
  registerUserUrl,
} from "../../@api/Endpoint";
import { axiosInstance as axios } from "../../@api/axios";
import { AuthActionTypes } from "../redux/actionTypes";
import { User } from "../../@models/User";

export const submitLogin = (user: User, history) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_START,
    });
    const request = {
      email: user.userName,
      password: user.password,
    };
    const url = loginUserUrl();
    axios
      .post(url, request)
      .then((res) => {
        let { data } = res;
        if (
          data.accessToken &&
          data.accessToken !== "undefined" &&
          data._id &&
          data._id !== "undefined"
        ) {
          loginUserSuccess(dispatch, data, history);
        } else {
          loginUserFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response.data) {
          toast.error(error.response.data);
        }
        loginUserFail(dispatch, "There was an error connection2");
      });
  };
};
const loginUserFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: AuthActionTypes.LOGIN_USER_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const loginUserSuccess = (dispatch, data, history) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
  localStorage.setItem("access_token", data.accessToken);
  localStorage.setItem("userId", data._id);
  dispatch({
    type: AuthActionTypes.LOGIN_USER_SUCCESS,
    payload: data,
  });
  history.push("/home");
};

export const submitRegister = (user: User, history) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.CREATE_USER_START,
    });
    const request = {
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      password: user.password,
    };
    const url = registerUserUrl();
    axios
      .post(url, request)
      .then((res) => {
        let { data } = res;
        console.log(data);
        if (
          data.accessToken &&
          data.accessToken !== "undefined" &&
          data._id &&
          data._id !== "undefined"
        ) {
          registerUserSuccess(dispatch, data, history);
        } else {
          registerUserFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response.data) {
          toast.error(error.response.data);
        }

        registerUserFail(dispatch, "There was an error connection2");
      });
  };
};
const registerUserFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: AuthActionTypes.CREATE_USER_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const registerUserSuccess = (dispatch, data, history) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
  localStorage.setItem("access_token", data.accessToken);
  localStorage.setItem("userId", data._id);
  dispatch({
    type: AuthActionTypes.CREATE_USER_SUCCESS,
    payload: data,
  });
  localStorage.setItem("firstTime", "true");
  history.push("/home");
};

export const getUser = (id) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.GET_USER_START,
    });

    const url = getUserByIdUrl(id);
    axios
      .get(url)
      .then((res) => {
        let { data } = res;
        if (data._id && data._id !== "undefined") {
          getUserSuccess(dispatch, data);
        } else {
          getUserFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        getUserFail(dispatch, "There was an error connection2");
      });
  };
};
const getUserFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: AuthActionTypes.GET_USER_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const getUserSuccess = (dispatch, data) => {
  dispatch({
    type: AuthActionTypes.GET_USER_SUCCESS,
    payload: data,
  });
};
