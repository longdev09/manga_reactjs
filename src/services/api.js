import instance from "../utils/instance";

// api lay the loai truyen tranh
export const getGenres = async () => {
  const res = await instance.get("completed-comics");
  return res.data;
};
