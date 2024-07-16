import { combineReducers } from "redux";
import fechHomeReducer from "./fechHomeReducer";
import fechGetGenresReducer from "./fechGetGenresReducer";
import fechDetailReducer from "./fechDetailReducer";

const rootReducers = combineReducers({
  homeComics: fechHomeReducer,
  genresComics: fechGetGenresReducer,
  detailComics: fechDetailReducer,
});

export default rootReducers;
