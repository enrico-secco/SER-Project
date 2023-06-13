import { ISignInProps } from "@/stores/hook/useAuth";
import { api } from "../api";

interface ISignInResponse {
  token: string;
}

export const login = (body: ISignInProps) => {
  return api.post<ISignInResponse>("/auth/signin", body);
};
