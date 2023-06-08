import { IProvider } from "@/interfaces/models";
import { api } from "../api";

export interface IGetProviderRequest {
  name?: string;
}

export const getProviders = (params: IGetProviderRequest) => {
  return api.get<IProvider[]>("/providers/search", {
    params,
  });
};

export type TCreateProviderData = Omit<IProvider, "id">;

export const createProvider = (body: TCreateProviderData) => {
  return api.post<any>("/providers", body);
};
