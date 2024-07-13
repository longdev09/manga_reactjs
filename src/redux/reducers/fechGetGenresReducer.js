import * as typeActions from "../typeActions";

const initialState = {
  genres: [],
  loadingGenres: false,
  error: "",
};

const fechGetGenresReducer = (state = initialState, action) => {
  if (action.meta && action.meta.feature !== "genres") return state;
  switch (action.type) {
    case typeActions.FECH_PENDING:
      return {
        ...state,
        loadingGenres: true,
      };
    case typeActions.FECH_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        loadingGenres: false,
      };
    case typeActions.FECH_FAILLURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default fechGetGenresReducer;
