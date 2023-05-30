import { Label } from "@components/atoms/Label";
import { ContainerTextArea, FormControl } from "./styles";
import { DefaultSettings } from "../defaultSettings";

interface ITextAreaProps extends DefaultSettings {
  cols?: number;
  rows?: number;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export const TextArea = ({
  cols,
  rows,
  label,
  placeholder,
  isRequired,
  form,
  name,
}: ITextAreaProps) => {
  return (
    <>
      <Label text={label} isRequired={isRequired} />
      <FormControl>
        <ContainerTextArea
          placeholder={placeholder}
          rows={rows ?? 3}
          cols={cols ?? 1}
          {...form.register(name)}
        />
      </FormControl>
    </>
  );
};
