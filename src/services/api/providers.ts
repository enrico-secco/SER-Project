import { IPaginationResponse } from "./../../interfaces/api";
import { IProvider } from "@/interfaces/models";
import { api } from "../api";
import { IPaginationRequest, ISuccessResponse } from "@/interfaces/api";

type OrderType = "asc" | "desc";
export interface IGetProviderRequest {
  filterName?: string;
  orderName?: OrderType;
}

export const getProviders = (
  params: IPaginationRequest<IGetProviderRequest>
) => {
  return api.get<IPaginationResponse<IProvider>>("/providers", {
    params,
    headers: {
      "X-Paginate": true,
    },
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

export const deleteProvider = (providerId: number) => {
  return api.delete<ISuccessResponse>(`/providers/${providerId}`);
};
