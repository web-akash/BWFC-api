import axios from "axios";

let Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default Api;
