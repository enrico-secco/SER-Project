import { IColumnsProps } from "@/components/molecules/Table";
import { IProvider } from "@/interfaces/models";

export const headers: IColumnsProps<IProvider>[] = [
  {
    key: "name",
    label: "usuario",
  },
  {
    key: "email",
    label: "e-mail",
  },
  {
    key: "cpf",
    label: "cpf",
  },
];
