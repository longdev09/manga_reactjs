import { combineReducers } from "redux";
import fechHomeReducer from "./fechHomeReducer";
import fechGetGenresReducer from "./fechGetGenresReducer";
import fechDetailReducer from "./fechDetailReducer";
import authReducer from "./authReducer";
import commentReducer from "./commentReducer";

const rootReducers = combineReducers({
  homeComics: fechHomeReducer,
  genresComics: fechGetGenresReducer,
  detailComics: fechDetailReducer,
  authReducer: authReducer,
  commentReducer: commentReducer,
});

export default rootReducers;
