import { Box } from "@components/atoms/Box";
import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/buttons";
import { Inputs } from "@components/molecules/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { form_validation } from "./schema";
import { convertFileToBase64 } from "@utils/convertFileToBase64";
import { TCreateProviderData, createProvider } from "@services/api/providers";
import { useMutation } from "react-query";

export const CreateProvider = () => {
  const form = useForm<TCreateProviderData>({
    resolver: yupResolver(form_validation),
  });

  const { mutate } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return createProvider(body);
    },
    onSuccess: (success) => {},
    onError: (error) => {},
  });

  const handleSubmit = async (onValid: TCreateProviderData) => {
    const profilePicBase64 = await convertFileToBase64(
      onValid.profilePic[0] as File
    );
    onValid.profilePic = profilePicBase64;
    mutate(onValid);
  };

  return (
    <>
      <Box>
        <Grid.Container columns={12}>
          <Grid.Item column={12}>
            <h4>Informacoes pessoais</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              deserunt maiores deleniti fugit beatae laboriosam nemo, quaerat id
              et possimus obcaecati dolorum assumenda libero veritatis tempora
              eum illum, unde est.
            </p>
          </Grid.Item>
          <Grid.Item column={12}>
            <Inputs.File
              label="foto de perfil"
              isRequired
              form={form}
              name="profilePic"
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
              placeholder="jhonDoe@email.com"
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
          <Grid.Item column={12}>
            <Inputs.TextArea
              label="Bio"
              placeholder="escreva algo interessante sobre voce aqui..."
              isRequired
              rows={5}
              form={form}
              name="bio"
            />
          </Grid.Item>
          <Grid.Item column={2}>
            <Button.Default
              text="Criar prestador"
              onClick={form.handleSubmit(handleSubmit)}
            />
          </Grid.Item>
        </Grid.Container>
      </Box>
    </>
  );
};