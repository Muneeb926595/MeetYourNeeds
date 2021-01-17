export const BASE = "api end point";

export const loginUserUrl = () => {
  return encodeURI("auth/login");
};
export const registerUserUrl = () => {
  return encodeURI("auth/user");
};
export const getUserByIdUrl = (id) => {
  return encodeURI("auth/user/" + id);
};
export const getAddProductUrl = () => {
  return encodeURI("product");
};
export const getProductsUrl = () => {
  return encodeURI("product");
};
