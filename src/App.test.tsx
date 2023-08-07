import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders sign up title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Sign Up/i);
  expect(titleElement).toBeInTheDocument();
});
