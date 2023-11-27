import axios from "axios";

export const localApi = axios.create({
  baseURL: "http://localhost:5000/oikos-pro-api",
});
