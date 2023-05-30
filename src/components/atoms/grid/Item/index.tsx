import { PropsWithChildren } from "react";
import { ContainerItem } from "./styles";

interface IItemProps {
  column?: number;
}

export const Item = ({ children, column }: PropsWithChildren<IItemProps>) => {
  return <ContainerItem column={column}>{children}</ContainerItem>;
};

export default Item;
