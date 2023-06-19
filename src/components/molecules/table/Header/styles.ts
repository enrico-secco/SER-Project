import styled from "styled-components";

export const ContainerHeader = styled.tr`
  background: #f1f2f3;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const ContainerRow = styled.th`
  text-align: left;
  text-transform: uppercase;
  color: #223344;
  font-size: 0.85rem;
  overflow-wrap: break-word;
  vertical-align: top;
  padding: 0.5rem;
  inline-size: 100%;
  max-width: 300px;
  writing-mode: horizontal-tb;
`;
