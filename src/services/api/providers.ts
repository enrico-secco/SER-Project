import { IProvider } from "@/interfaces/models";
import { api } from "../api";
import { ISuccessResponse } from "@/interfaces/apiResponse";

export interface IGetProviderRequest {
  name?: string;
}

export const getProviders = (params: IGetProviderRequest) => {
  return api.get<IProvider[]>("/providers/search", {
    params,
  });
};

export const findProviderById = (provider_id: string) => {
  return api.get<IProvider>(`/providers/${provider_id}`);
};

export type TCreateProviderData = Omit<IProvider, "id">;

export const createProvider = (body: TCreateProviderData) => {
  return api.post<ISuccessResponse>("/providers", body);
};

export const updateProvider = (
  body: TCreateProviderData,
  provider_id: string
) => {
  return api.put<ISuccessResponse>(`/providers/${provider_id}`, body);
};
