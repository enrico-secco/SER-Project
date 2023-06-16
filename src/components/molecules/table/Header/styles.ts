import styled from "styled-components";

export const ContainerHeader = styled.tr`
  background: #f1f2f3;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const ContainerRow = styled.th`
  color: #445566;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 0.5rem;
  vertical-align: top;
  overflow-wrap: break-word;
  max-width: 300px;
  inline-size: 100%;
  writing-mode: horizontal-tb;
`;
