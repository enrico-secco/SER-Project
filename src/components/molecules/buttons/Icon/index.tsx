import { Icon } from "@components/atoms/Icon";
import { Container } from "./styles";
import { TColorKeys, TFontSizeKeys } from "@/interfaces/theme";

interface IIconButtonProps extends React.ButtonHTMLAttributes<any> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: TColorKeys;
  background?: string;
  size?: TFontSizeKeys;
  icon: string;
  isLoading?: boolean;
}

export const IconButton = (props: IIconButtonProps) => {
  return (
    <Container
      color={props.color}
      background={props.background}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <Icon name="loading" color={props.color} size={props.size} />
      ) : (
        <Icon name={props.icon ?? ""} color={props.color} size={props.size} />
      )}
    </Container>
  );
};
