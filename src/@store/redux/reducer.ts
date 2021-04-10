import { combineReducers } from "redux";

import auth from "../auth/AuthReducers";
import product from "../product/ProductReducers";

const MeetYourNeeds = combineReducers({
  auth,
  product,
});

export default MeetYourNeeds;
