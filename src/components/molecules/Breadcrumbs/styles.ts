import styled, { css } from "styled-components";
import { Link as LinkDom } from "react-router-dom";

export const Container = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
`;

const linkStyle = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #6c6c6c;

  + ::before {
    display: inline-block;
    padding: 0 0.5rem;
    color: #6c6c6c;
    content: " / ";
  }
`;

export const Link = styled(LinkDom)`
  ${linkStyle}

  :hover {
    color: #ce275c;
  }
`;

export const Item = styled.div`
  ${linkStyle}
`;
