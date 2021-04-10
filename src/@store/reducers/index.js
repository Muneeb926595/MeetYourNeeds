import { combineReducers } from "redux";

import MeetYourNeeds from "../redux/reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    MeetYourNeeds,
    ...asyncReducers,
  });

export default createReducer;
