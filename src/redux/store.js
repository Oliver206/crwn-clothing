import { createStore, applyMiddleware } from "redux";

// Middleware for logging to console.
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // Spreading is more scalable

export default store;
