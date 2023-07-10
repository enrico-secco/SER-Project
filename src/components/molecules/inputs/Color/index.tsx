import { useMemo } from "react";
import { DefaultSettings } from "../defaultSettings";
import { ContainerInput, FormControl } from "./styles";
import { Label } from "@components/atoms/Label";
import { Error } from "@/components/atoms/Error";

interface ITextProps extends DefaultSettings {
  label?: string;
  isRequired?: boolean;
}

export const Color = ({ label, isRequired, form, name }: ITextProps) => {
  const error = useMemo(() => {
    return form.getFieldState(name).error;
  }, [form.formState]);

  return (
    <div>
      <Label text={label} isRequired={isRequired} />
      <FormControl>
        <ContainerInput
          {...form.register(name)}
          type="color"
          onChange={(event) => {
            form.register(name).onChange(event);
            form.clearErrors(name);
          }}
        />
        <Error text={error?.message} />
      </FormControl>
    </div>
  );
};
