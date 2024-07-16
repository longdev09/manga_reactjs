import * as typeActions from "../typeActions";
const initialState = {
  detailComics: [],
  loadingDetail: false,
  error: "",
};

const fechDetailReducer = (state = initialState, action) => {
  if (action.meta && action.meta.feature !== "detail") return state;
  switch (action.type) {
    case typeActions.FECH_PENDING:
      return {
        ...state,
        loadingDetail: true,
      };
    case typeActions.FECH_SUCCESS:
      return {
        ...state,
        detailComics: action.payload,
        loadingDetail: false,
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
export default fechDetailReducer;
