import { PropsWithChildren } from "react";
import { ContainerHeader, Column } from "./styles";

interface IBodyProps {
  keyExtractor: (item: any) => string | number;
  labelExtractor: (item: any) => string;
  list: any[];
}

export const Body = (props: PropsWithChildren<IBodyProps>) => {
  return (
    <ContainerHeader>
      {props.list.map((col) => (
        <Column key={props.keyExtractor(col)}>
          {props.labelExtractor(col)}
        </Column>
      ))}
    </ContainerHeader>
  );
};
