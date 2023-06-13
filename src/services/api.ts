import axios from "axios";
import { authorizationRequest } from "./interceptors/authorizationRequest";

const api = axios.create({
  baseURL: "http://172.16.80.17:9415/",
});

api.interceptors.request.use(authorizationRequest);

export { api };
