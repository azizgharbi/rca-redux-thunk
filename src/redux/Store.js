import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

//Reducers
import rootReducer from "./reducers";

//React Dev-tools
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunkMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
