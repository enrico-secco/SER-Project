import { Icon } from "@components/atoms/Icon";
import { Container } from "./styles";
import { TColorKeys, TFontSizeKeys } from "@/interfaces/theme";

interface IDefaultProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: TColorKeys;
  background?: TColorKeys;
  size?: TFontSizeKeys;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}

export const Default = (props: IDefaultProps) => {
  return (
    <Container
      color={props.color}
      background={props.background}
      size={props.size}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <Icon name="refresh" color="#FFF" />
      ) : (
        <>
          {props.startIcon && (
            <Icon name={props.startIcon ?? ""} color={props.color} />
          )}
          {props.text}
          {props.endIcon && (
            <Icon name={props.endIcon ?? ""} color={props.color} />
          )}
        </>
      )}
    </Container>
  );
};
