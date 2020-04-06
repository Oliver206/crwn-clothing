import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// If state is not set (beginning) set it to INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER: // action type SET_CURRENT_USER
      return {
        ...state, // spread everything on the state, cause we only want to modify certain values
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
