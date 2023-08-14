import React from "react";
import { useFormType } from "./formContext";

const TestContext = () => {
  const { formType } = useFormType(); // Destructure formType and setFormType

  return (
    <div>
      <h1>Page Type: {formType}</h1>
    </div>
  );
};

export default TestContext;
