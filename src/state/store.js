import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
