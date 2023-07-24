import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;

  ${({ theme }) => `
    border: 1px solid ${theme.colors.textDetail};
    border-radius: ${theme.radius.sm}`}
`;

export const ContainerInput = styled.input`
  padding: 0.7em 2em;
  flex: 1;
  border: none;

  ${({ theme: { radius, ...theme } }) => `
    color: ${theme.colors["textDetail"]};
    font-size: ${theme.fontSize["md"]};
    border-radius: ${radius.sm} 0 0 ${radius.sm}
  `}
`;

export const Button = styled.button`
  padding: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => `
    border: 1px solid ${theme.colors["secondary"]};
    background: ${theme.colors["secondary"]};
    border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
  `}
`;
