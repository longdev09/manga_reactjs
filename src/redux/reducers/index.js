import { combineReducers } from "redux";
import fechGetTrendingComicsReducer from "./fechGetTrendingComicsReducer";
import fechGetUpdateComicsReducer from "./fetchGetUpdateComicsReducer";
const rootReducers = combineReducers({
  trendingComics: fechGetTrendingComicsReducer,
  updateComics: fechGetUpdateComicsReducer,
});

export default rootReducers;
