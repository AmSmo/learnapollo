import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  let compProps = {
    ...field,
    id: props.name,
    placeholder: props.placeholder,
    type: props.type,
  };

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      {props.type === "textarea" ? (
        <Textarea {...compProps} />
      ) : (
        <Input {...compProps} />
      )}

      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
