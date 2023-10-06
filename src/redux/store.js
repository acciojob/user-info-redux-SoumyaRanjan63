import { createStore } from "redux";
import getUserInfoReducer from "./reducer/getUserInfoReducer";

const store=createStore(getUserInfoReducer);
export default store;