import {createStore} from "redux";
import {PostReducer} from "./Post/postReducer";

const store = createStore(PostReducer);

export default store;
