import React, { useState, useMemo } from "react";
import FormInput from "./components/FormInput";
import FormContext from "./contexts/FormContext";
import "./App.css";

const App = () => {
  const [form, setForm] = useState({
    email: "",
    pswd: "",
    pswdRepeat: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setForm({
      ...form,
      [id]: value,
    });
  };

  const isPswdMismatch = useMemo(() => form.pswd !== form.pswdRepeat, [form]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle sign up logic
    console.log("🚀 ~ file: App.tsx:27 ~ handleSubmit ~ form:", form);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        handleFormChange,
      }}
    >
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr className="divider" />
          {isPswdMismatch && <p className="helper">Password doesn't match</p>}
          <FormInput
            id="email"
            label="Email"
            placeholder="Enter Email"
            className="email-input"
            type="email"
            required
          />
          <FormInput
            id="pswd"
            label="Password"
            placeholder="Enter Password"
            className="pswd-input"
            type="password"
            required
          />
          <FormInput
            id="pswdRepeat"
            label="Repeat Password"
            placeholder="Confirm Password"
            className="pswd-repeat-input"
            type="password"
            required
          />
          <button
            type="submit"
            className="signup-btn"
            disabled={isPswdMismatch}
          >
            Sign Up
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
};

export default App;
