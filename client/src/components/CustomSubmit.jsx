import { useFormikContext } from "formik";
import StyledButton from "./StyledButton";
const CustomSubmit = ({ children, ...props }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    fullWidth: false,
    onClick: handleSubmit,
    sx: { fontSize: "0.9em", marginLeft: "auto" },
  };

  return <StyledButton {...configButton}>{children}</StyledButton>;
};

export default CustomSubmit;
