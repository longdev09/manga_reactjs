import { combineReducers } from "redux";
import fechHomeReducer from "./fechHomeReducer";
import fechGetGenresReducer from "./fechGetGenresReducer";

const rootReducers = combineReducers({
  homeComics: fechHomeReducer,
  genresComics: fechGetGenresReducer,
});

export default rootReducers;
