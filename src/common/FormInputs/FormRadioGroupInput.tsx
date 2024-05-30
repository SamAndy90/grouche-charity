import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { RadioGroupInput } from "common/UI/Inputs/RadioGroupInput";

export type FormRadioGroupInputProps<T> = {
  fieldName: Path<T>;
};

export function FormRadioGroupInput<T extends FieldValues>(
  props: FormRadioGroupInputProps<T>,
) {
  const { fieldName } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => <RadioGroupInput {...field} />}
    />
  );
}
