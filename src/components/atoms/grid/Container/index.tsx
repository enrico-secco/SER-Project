import { PropsWithChildren } from "react";
import { GridContainer } from "./styles";
import { IntRange } from "@/interfaces/types/intRange.types";

interface IContainerProps {
  columns: IntRange<1, 13>;
  rowGap?: IntRange<1, 201>;
  columnGap?: IntRange<1, 201>;
}

export const Container = (props: PropsWithChildren<IContainerProps>) => {
  return (
    <GridContainer
      columns={props.columns}
      rowGap={props.rowGap}
      columnGap={props.columnGap}
    >
      {props.children}
    </GridContainer>
  );
};

export default Container;
