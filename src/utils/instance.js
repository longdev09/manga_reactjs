import axios from "axios";
const instance = axios.create({
  baseURL: "https://comics-api.vercel.app/v2",
});
export default instance;
