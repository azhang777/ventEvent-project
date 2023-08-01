import { useField } from "formik"; //hooks custom inputs to formik (share state, helpers, etc)

const CustomInput = ({ label, ...props }) => {
  //destructure label and spread props which contains properties such as name, type, placeholder, etc
  const [field, meta] = useField(props);
  console.log("field" + field);
  console.log("meta" + meta);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
};

export default CustomInput;
