import { useField } from "formik";
import { Checkbox } from "@mui/material";
const CustomCheckbox = ({ name, ...props }) => {
  const [field, meta] = useField(props);

  const configCheckBox = { ...field, ...props, name };
  return (
    <>
      <Checkbox {...configCheckBox} />
      <span>I accept TOS</span>
    </>

    /*     <>
      <div>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />

        <span>I accept TOS</span>
      </div>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </> */
  );
};

export default CustomCheckbox;
