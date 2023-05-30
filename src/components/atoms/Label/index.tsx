import { ContainerLabel } from "./styles";

interface ILabelProps {
  text?: string;
  isRequired?: boolean;
}

export const Label = ({text, isRequired}: ILabelProps) => {
  return <ContainerLabel>{text}{isRequired && <strong>*</strong>}</ContainerLabel>;
}