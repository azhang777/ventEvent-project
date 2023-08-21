import React, { useState, useContext, createContext } from "react";

const FormContext = createContext();

function useFormType() {
  return useContext(FormContext);
}

const FormTypeProvider = ({ children }) => {
  const [formType, setFormType] = useState("register");

  const updateFormType = (newValue) => {
    setFormType(newValue);
  };
  
  return (
    <FormContext.Provider value={{ formType, updateFormType }}>
      {children}
    </FormContext.Provider>
  );
};

export { useFormType, FormTypeProvider };
