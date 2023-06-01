import { Icon } from "@components/atoms/Icon";
import { Container, DropZone, ContainerIcon } from "./styles";
import { Label } from "@components/atoms/Label";
import { DefaultSettings } from "../defaultSettings";
import { useMemo } from "react";
import { Error } from "@/components/atoms/Error";

interface IFileProps extends DefaultSettings {
  label?: string;
  isRequired?: boolean;
}

export const File = ({ label, isRequired, form, name }: IFileProps) => {
  const file = form.watch(name) as FileList | undefined;

  const error = useMemo(() => {
    return form.getFieldState(name).error;
  }, [form.formState]);

  const spanMessage: string = file?.[0].name ?? "Selecione uma foto de perfil";

  return (
    <>
      <Container>
        <Label text={label} isRequired={isRequired}></Label>
        <DropZone htmlFor="field-file">
          <ContainerIcon>
            <Icon name="image" size="lg" color="#366EC2" />
          </ContainerIcon>
          <span>{spanMessage}</span>
        </DropZone>
        <input id="field-file" type="file" {...form.register(name)} />
      </Container>
      <Error text={error?.message} />
    </>
  );
};
