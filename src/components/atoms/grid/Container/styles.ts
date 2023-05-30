import styled from "styled-components";
import { IntRange } from "../../../../interfaces/utils-types";

interface IGridContainerProps {
  columns: IntRange<1, 13>;
  rowGap?: IntRange<1, 201>;
  columnGap?: IntRange<1, 201>;
}

export const GridContainer = styled.div<IGridContainerProps>`
  ${(props) => `
    display: grid;
    grid-template-columns: repeat(${props.columns ?? 12}, 1fr);
    row-gap: ${props.rowGap ?? 20}px;
    column-gap: ${props.columnGap ?? 20}px;
  `}
`;
