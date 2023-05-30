import { PropsWithChildren } from "react";
import { ContainerBody, Column } from "./styles";

interface IHeaderProps {
  keyExtractor: (item: any) => string | number;
  labelExtractor: (item: any) => string;
  list: any[];
}

export const Header = (props: PropsWithChildren<IHeaderProps>) => {
  return (
    <ContainerBody>
      {props.list.map((col) => (
        <Column key={props.keyExtractor(col)}>
          {props.labelExtractor(col)}
        </Column>
      ))}
    </ContainerBody>
  );
};
