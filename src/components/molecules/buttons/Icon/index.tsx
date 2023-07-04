import { Icon, iconSizes } from "@components/atoms/Icon";
import { Container } from "./styles";

interface IIconButtonProps extends React.ButtonHTMLAttributes<any> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
  background?: string;
  size?: keyof typeof iconSizes;
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
