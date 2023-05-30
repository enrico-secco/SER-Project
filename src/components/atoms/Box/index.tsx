import { PropsWithChildren } from "react";
import { Container } from "./styles";

interface IBoxProps {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const Box = (props: PropsWithChildren<IBoxProps>) => {
  return (
    <Container
      marginBottom={props.marginBottom}
      marginRight={props.marginRight}
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
    >
      {props.children}
    </Container>
  );
};
