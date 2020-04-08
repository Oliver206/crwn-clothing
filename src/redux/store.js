import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// Middleware for logging to console.
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // Spreading is more scalable

export const persistor = persistStore(store);

export default { store, persistor };
