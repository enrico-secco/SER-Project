import { TColorKeys, TFontSizeKeys } from "@/interfaces/theme";
import { Span } from "./styles";

interface IIconProps {
  name: string;
  color?: TColorKeys;
  size?: TFontSizeKeys;
}
// Select icon by https://fonts.google.com/icons?selected=Material+Icons:home
export const Icon = ({ name, color, size }: IIconProps) => {
  return (
    <Span color={color} size={size}>
      {name}
    </Span>
  );
};
