import { useField, useFormikContext } from "formik";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/material";
const CustomCheckbox = ({ name, label, legend, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };

  const configCheckBox = { ...field, onChange: handleChange };

  const configFormControl = {};

  if (meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormGroup>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormLabel
            component='legend'
            sx={{ marginRight: "16px" }}
          >
            {legend}
          </FormLabel>
          <FormControlLabel
            control={<Checkbox {...configCheckBox} />}
            label={label}
          />
        </Box>
      </FormGroup>
    </FormControl>
  );
};

export default CustomCheckbox;

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
