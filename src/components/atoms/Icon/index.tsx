import { Span } from "./styles";

export const iconSizes = {
  sm: ".7rem",
  md: "1rem",
  lg: "1.3rem",
};

interface IIconProps {
  name: string;
  color?: string;
  size?: keyof typeof iconSizes;
}
// Select icon by https://fonts.google.com/icons?selected=Material+Icons:home
export const Icon = ({ name, color, size }: IIconProps) => {
  return (
    <Span color={color} style={{ fontSize: iconSizes[size ?? "md"] }}>
      {name}
    </Span>
  );
};
