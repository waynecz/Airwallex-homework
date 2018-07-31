import { API_HOST } from "./env";
import axios from "axios";

export const http = axios.create({
  baseURL: API_HOST
});

http.interceptors.response.use(
  res => res.data,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = API_HOST;
      return;
    }

    return Promise.reject(error);
  }
);
