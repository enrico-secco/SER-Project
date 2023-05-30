import { DefaultSettings } from "../defaultSettings";
import { FormControl, ContainerInput } from "./styles";
import { Label } from '@components/atoms/Label';

interface ITextProps extends DefaultSettings {
  type: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;

}

export const Text = ({ type, label, placeholder, isRequired, form, name}: ITextProps) => {
  return (
    <div>
      <Label text={label} isRequired={isRequired}/>
      <FormControl>
        <ContainerInput
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
        ></ContainerInput>
      </FormControl>
    </div>
  );
};
