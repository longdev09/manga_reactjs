import axios from "axios";
const instance = axios.create({
  baseURL: "https://comics-api.vercel.app/",
});
export default instance;
