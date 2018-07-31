import { API_HOST } from "./env";
import axios from "axios";

export const http = axios.create({
  baseURL: API_HOST
});

http.interceptors.response.use(
  res => res.data,
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.errorMessage);
    } else {
      return Promise.reject(error.toString())
    }
  }
);
