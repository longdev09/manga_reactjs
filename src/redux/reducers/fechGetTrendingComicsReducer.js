import * as typeActions from "../typeActions";

const initialState = {
  trendingItem: [],
  loadingTrending: false,
  error: "",
};

const fechGetTrendingComicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.FECH_PENDING:
      return {
        ...state,
        loadingTrending: true,
      };
    case typeActions.FECH_SUCCESS:
      return {
        ...state,
        trendingItem: action.payload,
        loadingTrending: false,
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
export default fechGetTrendingComicsReducer;
