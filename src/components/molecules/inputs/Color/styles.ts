import styled from "styled-components";

export const FormControl = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 5px;
  overflow: hidden;
`;

export const ContainerInput = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;

  width: 200%;
  height: 200%;
  transform: translate(-25%, -25%);
  //Duplicou o tamanho e fez o translate para cortá-lo
`;
