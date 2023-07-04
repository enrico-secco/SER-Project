import { AxiosError } from "axios";

export const unauthorizedResponse = (error: AxiosError) => {
  const statusCode = error.response?.status;
  const path = window.location.pathname;

  if (statusCode === 401 && !path.toUpperCase().includes("auth")) {
    localStorage.clear();
    window.location.href = "/auth/sign-in";
  }

  return Promise.reject(error);
};
