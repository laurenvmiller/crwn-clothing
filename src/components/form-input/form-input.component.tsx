import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({
  label,
  otherProps,
}: {
  label: string;
  otherProps: any;
}) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
