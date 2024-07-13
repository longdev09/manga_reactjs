import * as typeActions from "../typeActions";

const initialState = {
  trendingItem: [],
  updateItem: [],
  loading: false,
  error: "",
};

const fechHomeReducer = (state = initialState, action) => {
  if (action.meta && action.meta.feature !== "home") return state;
  switch (action.type) {
    case typeActions.FECH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case typeActions.FECH_SUCCESS:
      return {
        ...state,
        trendingItem: action.payload,
        updateItem: action.itemUpdate,
        loading: false,
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
export default fechHomeReducer;
