import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.80.17:9415/",
});

export { api };
