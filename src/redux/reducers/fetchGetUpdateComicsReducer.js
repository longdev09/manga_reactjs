import * as typeActions from "../typeActions";

const initialState = {
  updateItem: [],
  loadingUpdate: false,
  error: "",
};

const fechGetUpdateComicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.FECH_PENDING:
      return {
        ...state,
        loadingUpdate: true,
      };
    case typeActions.FECH_SUCCESS:
      return {
        ...state,
        updateItem: action.payload,
        loadingUpdate: false,
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
export default fechGetUpdateComicsReducer;
