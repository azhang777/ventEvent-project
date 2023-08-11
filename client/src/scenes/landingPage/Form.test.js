console.log("Test file executed!");

import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders Form component without errors", () => {
  render(<Form />);
  const emailInput = screen.getByLabelText("Email");
  const ageInput = screen.getByLabelText("Age");
  const passwordInput = screen.getByLabelText("Password");
  const confirmPasswordInput = screen.getByLabelText("Confirm Password");
  const submitButton = screen.getByText("Submit");

  expect(emailInput).toBeInTheDocument();
  expect(ageInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
