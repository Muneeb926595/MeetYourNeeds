import { getAddProductUrl } from "../../@api/Endpoint";
import { ProductActionTypes } from "../redux/actionTypes";
import { axiosInstance as axios } from "../../@api/axios";
import { Product } from "../../@models/Product";

export const addNewProduct = (product: Product) => {
  return (dispatch) => {
    dispatch({
      type: ProductActionTypes.CREATE_PRODUCT_START,
    });

    const url = getAddProductUrl();
    console.log("going to call with", url, product);
    let formData = new FormData();
    for (let key in product) {
      if (key === "imageFile" && product[key] != null) {
        formData.append(key, product[key], product[key].name);
      } else {
        formData.append(key, product[key]);
      }
    }
    axios
      .post(url, formData)
      .then((res) => {
        let { data } = res;
        if (data) {
          addNewProductuccess(dispatch, data);
        } else {
          createPostFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        createPostFail(dispatch, "There was an error connection2");
      });
  };
};
const createPostFail = (dispatch, errorMessage) => {
  dispatch({
    type: ProductActionTypes.CREATE_PRODUCT_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const addNewProductuccess = (dispatch, data) => {
  dispatch({
    type: ProductActionTypes.CREATE_PRODUCT_SUCCESS,
    payload: data,
  });
};
