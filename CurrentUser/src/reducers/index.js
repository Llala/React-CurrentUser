import { combineReducers } from 'redux';
import UserReducer from "./reducer_user";
import AuthReducer from "./reducer_user";

const rootReducer = combineReducers({
  user: UserReducer,
  authent: AuthReducer
});

export default rootReducer;
