import instance from "../utils/instance";
import * as typeActions from "./typeActions";
/// get api

// get trending comics
export const fechHome = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: typeActions.FECH_PENDING,
        meta: { feature: "home" },
      });
      //  call api
      const res = await instance.get("trending-comics");
      const resUpdate = await instance.get("recent-update-comics");
      const resTop = await instance.get("top/Monthly");

      // neu thanh cong
      dispatch({
        type: typeActions.FECH_SUCCESS,
        payload: res.data.comics,
        itemUpdate: resUpdate.data.comics,
        topItem: resTop.data.comics,
        meta: { feature: "home" },
      });
    } catch (error) {
      // tra ve neu that bai
      dispatch({
        type: typeActions.FECH_FAILLURE,
        payload: error.message,
        meta: { feature: "home" },
      });
    }
  };
};

export const fechGetGenres = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: typeActions.FECH_PENDING,
        meta: { feature: "genres" },
      });
      //  call api
      const res = await instance.get("genres");

      // neu thanh cong
      dispatch({
        type: typeActions.FECH_SUCCESS,
        payload: res.data,
        meta: { feature: "genres" },
      });
    } catch (error) {
      // tra ve neu that bai
      dispatch({
        type: typeActions.FECH_FAILLURE,
        payload: error.message,
        meta: { feature: "genres" },
      });
    }
  };
};

export const fechDetailComics = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: typeActions.FECH_PENDING,
        meta: { feature: "detail" },
      });
      //  call api chi tiet truyen tranh
      const res = await instance.get(`comics/${id}`);

      // neu thanh cong
      dispatch({
        type: typeActions.FECH_SUCCESS,
        payload: res.data,
        meta: { feature: "detail" },
      });
    } catch (error) {
      // tra ve neu that bai
      dispatch({
        type: typeActions.FECH_FAILLURE,
        payload: error.message,
        meta: { feature: "detail" },
      });
    }
  };
};
