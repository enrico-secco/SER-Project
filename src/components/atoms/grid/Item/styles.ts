import styled from "styled-components";

interface IContainerItemProps {
  column?: number;
}

export const ContainerItem = styled.div<IContainerItemProps>`
  ${({ column }) => `
    grid-column-end: span ${column};
  `};
`;
