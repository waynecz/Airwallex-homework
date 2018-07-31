import { API_HOST_MAP } from "@/config/hosts";

const HOST = location.host;

let ENV = "prod";

ENV = /dev|alpha/g.test(HOST) ? "dev" : "prod";

export const API_HOST = API_HOST_MAP[ENV] || "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com";
