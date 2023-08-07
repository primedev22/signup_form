import React, { useContext } from "react";
import FormContext from "../contexts/FormContext";

interface FormInputProps {
  id: "email" | "pswd" | "pswdRepeat";
  label: string;
  placeholder: string;
  className: string;
  type?: string;
  required?: boolean;
  ariaLabel?: string;
}

const FormInput = ({
  id,
  label,
  placeholder,
  className,
  type = "text",
  required = false,
  ariaLabel = "",
}: FormInputProps) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <>
      <label htmlFor={id}>
        <b>{label}</b>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={className}
        value={form[id]}
        onChange={handleFormChange}
        required={required}
        aria-label={ariaLabel}
      />
    </>
  );
};

export default FormInput;
