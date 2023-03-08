import axios from "axios";

let Api = axios.create({
  baseURL: "https://bwfc-api.vercel.app",
});

export default Api;
