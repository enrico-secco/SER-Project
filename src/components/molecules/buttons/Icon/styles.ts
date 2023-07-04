import styled from "styled-components";

interface IContainerProps {
  color?: string;
  background?: string;
  size?: string;
}

export const Container = styled.button<IContainerProps>`
  padding: 2em;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ color, background, size }) => {
    return `
      color: ${color ?? "#fff"};
      background: ${background ?? "#fff"};
      font-size: ${size}
    `;
  }}
`;
