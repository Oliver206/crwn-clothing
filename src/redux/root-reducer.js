import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// keys wie "user" sind die Teile des State, die eigentlichen Reducer sind dann z.B. userReducer
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
