import React from "react";
import { useField } from "formik"; //hooks custom inputs to formik (share state, helpers, etc)
import { TextField } from "@mui/material";

const CustomInput = ({ name, ...props }) => {
  //destructure name and spread props which contains properties such as name, type, placeholder, etc
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...props,
    fullWidth: true,
    variant: "outlined",
    sx: {
      margin: "0.7em 0",
      display: "flex",
      minHeight: "80px",
    },
  };

  if (meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  } //renders validation and requirement. .error and .helperText are props to TextField. We then pass values to those props for the TextField to later use.

  return <TextField {...configTextField} />;
};

export default CustomInput;

/* <>
      <name>{name}</name>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </> */
