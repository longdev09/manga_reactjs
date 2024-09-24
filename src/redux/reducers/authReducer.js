import * as typeActions from "../typeActions";

const initialState = {
  profile: null,
  isOpenModal: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.LOGIN_GOOGLE:
      return {
        ...state,
        profile: action.payload,
      };

    case typeActions.OPENMODALLOGIN:
      return {
        ...state,
        isOpenModal: action.payload,
      };

    case typeActions.CLOSEMODALLOGIN:
      return {
        ...state,
        isOpenModal: action.payload,
      };
    case typeActions.SET_USER:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
