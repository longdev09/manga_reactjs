import instance from "../utils/instance";
import * as typeActions from "./typeActions";
/// get api

// get trending comics
export const fechGetTrendingCom = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: typeActions.FECH_PENDING,
      });
      //  call api
      const res = await instance.get("trending-comics");
      // neu thanh cong
      dispatch({
        type: typeActions.FECH_SUCCESS,
        payload: res.data.comics,
      });
    } catch (error) {
      // tra ve neu that bai
      dispatch({
        type: typeActions.FECH_FAILLURE,
        payload: error.message,
      });
    }
  };
};

// get update comics
export const fechGetUpdateCom = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: typeActions.FECH_PENDING,
      });
      //  call api
      const res = await instance.get("recent-update-comics");
      // neu thanh cong
      dispatch({
        type: typeActions.FECH_SUCCESS,
        payload: res.data.comics,
      });
    } catch (error) {
      // tra ve neu that bai
      dispatch({
        type: typeActions.FECH_FAILLURE,
        payload: error.message,
      });
    }
  };
};
