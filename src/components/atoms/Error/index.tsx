import { ErrorStyled } from "@/pages/CreateProvider/styles";

interface IErrorProps {
  text?: string;
} 

export const Error = ({text}: IErrorProps) => {
  return text ? <ErrorStyled>{text}</ErrorStyled> : <></>;
}
