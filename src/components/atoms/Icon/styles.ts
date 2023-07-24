import theme from "@/global/styles/theme";
import { TColorKeys, TFontSizeKeys } from "@/interfaces/theme";
import styled from "styled-components";

interface ISpanProps {
  color?: TColorKeys;
  size?: TFontSizeKeys;
}

export const Span = styled.span.attrs({
  className: "material-icons",
})<ISpanProps>`
  ${({ theme, color, size }) => `
    font-size: ${size ?? theme.fontSize[size ?? "md"]};
    color: ${color ?? theme.colors[color ?? "primaryContrast"]};
  `}
`;
