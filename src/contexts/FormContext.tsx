import React, { createContext } from "react";

interface FormContextProps {
  form: {
    email: string;
    pswd: string;
    pswdRepeat: string;
  };
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormContext = createContext<FormContextProps>({
  form: { email: "", pswd: "", pswdRepeat: "" },
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export default FormContext;
