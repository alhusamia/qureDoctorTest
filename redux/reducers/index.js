import { combineReducers } from "redux";
import user from "./user";
import errors from "./errors";
import medicinList from "./medicin";

export default combineReducers({
  user,
  errors,
  medicinList,
});
