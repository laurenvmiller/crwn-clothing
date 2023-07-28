import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({
  name,
  label,
  type,
  required = false,
  value,
  onChange,
}: {
  name?: string;
  label: string;
  type: string;
  required: boolean;
  value: string;
  onChange: any;
}) => {
  return (
    <Group>
      <Input
        type={type}
        onChange={onChange}
        value={value}
        required={required}
        name={name}
      />
      {label && <FormInputLabel shrink={value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
