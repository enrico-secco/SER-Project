import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/Buttons";
import { Inputs } from "@components/molecules/Inputs";
import { Box } from "@components/atoms/Box";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  IGetProviderRequest,
  deleteProvider,
  getProviders,
} from "@services/api/providers";
import { Table } from "@/components/molecules/Table";
import { headers } from "./settings";
import { useQueryString } from "@/hook/useQueryString";
import { IPaginationRequest, IPaginationResponse } from "@/interfaces/api";
import { IProvider } from "@/interfaces/models";
import { useToast } from "@/stores/hook/useToast";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";

export const Providers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const form = useForm<IPaginationRequest<IGetProviderRequest>>();

  const [params, setParams] =
    useQueryString<IPaginationRequest<IGetProviderRequest>>();

  const { mutate } = useMutation({
    mutationFn: (providerId: number) =>
      deleteProvider(providerId).then((res) => res.data),
    onSuccess: (data) => {
      addToast({
        title: data.success,
        type: "success",
      });
      queryClient.invalidateQueries([
        "get_all_providers",
        JSON.stringify(params),
      ]);
    },
  });

  const addActionToProvidersList = (
    providers: IPaginationResponse<IProvider>
  ) => {
    //O parenteses já faz o return;
    providers.docs = providers.docs.map((provider) => ({
      ...provider,
      actions: (
        <Button.Default
          text="Deletar"
          background="error"
          startIcon="delete"
          onClick={() => mutate(provider.id)}
        />
      ),
    }));

    return providers;
  };

  const { data } = useQuery({
    queryKey: ["get_all_providers", JSON.stringify(params)],
    queryFn: () =>
      getProviders(params).then((res) => addActionToProvidersList(res.data)),
  });

  return (
    <>
      <Breadcrumbs
        menus={[{ label: "Home", path: "/home" }, { label: "Prestadores" }]}
      />
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Button.Default
            text="Novo prestador"
            size="md"
            startIcon="person_add_alt"
            onClick={() => navigate("/providers/new")}
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search
            type="text"
            form={form}
            name="filter"
            placeholder="Pesquise por um usuario"
            handleClick={(text) => setParams({ filterName: text })}
          />
        </Grid.Item>
        <Grid.Item column={12}>
          <Box>
            <Table
              columns={headers}
              rows={data?.docs ?? []}
              rowsProps={{
                keyExtractor: (item) => item.id,
                rowAction: (item) => navigate(`/providers/${item.id}`),
                total: data?.total,
              }}
            />
          </Box>
        </Grid.Item>
      </Grid.Container>
    </>
  );
};
