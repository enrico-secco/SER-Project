import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  #field-file {
    display: none;
  }
`;

export const DropZone = styled.label`
  padding: 0.85em 1em;
  border-radius: 5px;
  border: 1px dashed #333;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const ContainerIcon = styled.div`
  padding: 0.5em;
  border-radius: 5px;
  background: #366ec22b;
  max-width: max-content;
  max-height: max-content;
  display: flex;
  place-items: center;
`;
