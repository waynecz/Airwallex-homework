import { http } from "../clients";

export default {
  submitRequest({ name, email }) {
    return http.post("/prod/fake-auth", { name, email });
  }
};
