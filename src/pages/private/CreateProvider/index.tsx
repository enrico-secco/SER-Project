import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { Box } from "@components/atoms/Box";
import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/Buttons";
import { Inputs } from "@components/molecules/Inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { form_validation } from "./schema";
import { convertFileToBase64 } from "@utils/convertFileToBase64";
import {
  TCreateProviderData,
  createProvider,
  findProviderById,
  updateProvider,
} from "@services/api/providers";
import { IErrorResponse, ISuccessResponse } from "@/interfaces/api";
import { UserInformation } from "@/components/templates/UserInformation";
import { useToast } from "@/stores/hook/useToast";

export const CreateProvider = () => {
  const { addToast } = useToast();
  const { id_provider } = useParams();
  const [profilePic, setProfilePic] = useState<string>("");
  const isNewRecord = id_provider === "new";

  const form = useForm<TCreateProviderData>({
    resolver: yupResolver(form_validation),
  });

  const previewFormData = form.watch();

  const fetchData = () => {
    if (!isNewRecord && id_provider) {
      findProviderById(id_provider).then(({ data }) => {
        data.id === undefined;
        setProfilePic(data.profilePic);
        form.reset(data);
        return data;
      });
    }
  };

  const mutateReturns = {
    onSuccess: (success: AxiosResponse<ISuccessResponse, any>) => {
      addToast({
        title: success.data.success,
        type: "success",
      });
      form.reset();
      fetchData();
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      addToast({
        title: error.response?.data.error ?? "",
        type: "error",
      });
    },
  };

  const { mutate } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return createProvider(body);
    },
    ...mutateReturns,
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return updateProvider(body, id_provider ?? "");
    },
    // ou ...mutateReturns
    onSuccess: mutateReturns.onSuccess,
    onError: mutateReturns.onError,
  });

  const handleSubmit = async (onValid: TCreateProviderData) => {
    onValid.profilePic = profilePic;

    isNewRecord ? mutate(onValid) : updateMutation(onValid);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid.Container columns={12}>
      <Grid.Item column={8}>
        <Box>
          <Grid.Container columns={12}>
            <Grid.Item column={12}>
              <h4>Informações pessoais</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                deserunt maiores deleniti fugit beatae laboriosam nemo, quaerat
                id et possimus obcaecati dolorum assumenda libero veritatis
                tempora eum illum, unde est.
              </p>
            </Grid.Item>
            <Grid.Item column={12}>
              <Inputs.File
                label="Foto de perfil"
                isRequired
                form={form}
                name="profilePic"
                acceptFiles="image/jpeg,image/png"
                onFileChange={(e) => {
                  convertFileToBase64(e.currentTarget.files?.[0]).then(
                    (pic) => {
                      setProfilePic(pic);
                    }
                  );
                }}
              />
            </Grid.Item>
            <Grid.Item column={12}>
              <Inputs.Text
                type="text"
                label="nome completo"
                placeholder="Ex: Jhon Doe"
                isRequired
                form={form}
                name="name"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Text
                type="text"
                label="numero de telefone"
                placeholder="43 999999999"
                isRequired
                form={form}
                name="phone"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Text
                type="text"
                label="e-mail"
                placeholder="jhondoe@email.com"
                isRequired
                form={form}
                name="email"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Text
                type="text"
                label="cpf"
                placeholder="000.000.000-00"
                isRequired
                form={form}
                name="cpf"
              />
            </Grid.Item>
            <Grid.Item column={6}>
              <Inputs.Color form={form} name="color" label="Cor de fundo" />
            </Grid.Item>
            <Grid.Item column={12}>
              <Inputs.Text
                type="text"
                label="Bio"
                placeholder="escreva algo interessante sobre voce aqui..."
                isRequired
                form={form}
                name="bio"
              />
            </Grid.Item>
            <Grid.Item column={2}>
              <Button.Default
                text={isNewRecord ? "Criar prestador" : "Editar prestador"}
                onClick={form.handleSubmit(handleSubmit)}
              />
            </Grid.Item>
          </Grid.Container>
        </Box>
      </Grid.Item>
      <Grid.Item column={4}>
        <UserInformation
          data={{
            bio: previewFormData.bio,
            email: previewFormData.email,
            name: previewFormData.name,
            phone: previewFormData.phone,
            picture: profilePic,
            color: previewFormData.color,
          }}
        />
      </Grid.Item>
    </Grid.Container>
  );
};
