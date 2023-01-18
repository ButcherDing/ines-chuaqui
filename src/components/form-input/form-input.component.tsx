import { FC, InputHTMLAttributes } from "react";

import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value ? 1 : null}
          htmlFor={otherProps.id}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
