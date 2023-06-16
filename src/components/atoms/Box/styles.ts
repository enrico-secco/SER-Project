import styled from "styled-components";

interface IContainerProps {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const Container = styled.div<IContainerProps>`
  padding: 1rem;
  border-radius: 5px;
  background: #fff;

  ${(props) => `
    margin-top: ${props.marginTop ?? "0px"};
    margin-right: ${props.marginRight ?? "0px"};
    margin-bottom: ${props.marginBottom ?? "0px"};
    margin-left: ${props.marginLeft ?? "0px"};
  `}
`;
