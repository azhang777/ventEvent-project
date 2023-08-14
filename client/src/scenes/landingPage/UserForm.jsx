/* import { useState } from "react"; */
import { useFormType, FormTypeProvider } from "./formContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup"; //* imports everything from dependency
import { Field, Form, Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import CustomCheckbox from "../../components/CustomCheckbox";
//import CustomSelect from "../../components/CustomSelect";
import CustomSubmit from "../../components/CustomSubmit";
import { Box } from "@mui/material";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const registerSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Minimum length of 5")
    .matches(passwordRules, "Atleast 1 uppercase, 1 lowercase, and 1 number")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Please read and accept terms of service"),
});

const loginSchema = yup.object().shape({
  email: yup.string().required("Required"),
  password: yup
    .string()
    .min(5, "Minimum length of 5")
    .matches(passwordRules, "Atleast 1 uppercase, 1 lowercase, and 1 number")
    .required("Required"),
});

//next big focus is to create login feature and bring users to the homepage.
const initialValuesRegister = {
  username: "",
  email: "",
  password: "",
  acceptedTos: false,
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const onSubmit = async (values, actions) => {
  try {
    console.log(values);
    console.log(actions);
    const response = await fetch("http://localhost:6001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const savedUser = await response.json();
    console.log(savedUser);
    actions.resetForm();
  } catch (error) {
    console.log(error.message);
  }
}; /* refactor by separating API method and onSubmit method? That way we can have onSubmit handle registerAPI and loginAPI based on condition
      example:  registerAPI = async(values) => try line 49-55 return response catch(error) throw new Error
                onSubmit = async(values, actions) => {if register(try const responseData = await registerAPI(values) catch (error) else if login blah balh blah)} */

const UserForm = () => {
  /* const [pageType, setPageType] = useState("register"); */
  const { formType } = useFormType();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = formType === "login";
  const isRegister = formType === "register";
  /*   console.log(formType);
  console.log(isLogin);
  console.log(isRegister); */
  //pop up component needs to know whether its login or sign up for popup title use redux oorr useContext? NO It doesn't need to know!
  //sign up and login buttons should also manage the pageType state.
  return (
    <FormTypeProvider>
      <Formik
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
        onSubmit={onSubmit}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            {isRegister && (
              <CustomInput
                label='Username'
                name='username'
                type='text'
              /> //renders username input if registering
            )}
            <CustomInput
              label='Email'
              name='email'
              type='text'
            />
            <CustomInput
              label='Password'
              name='password'
              type='password'
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              {isRegister && (
                <CustomCheckbox
                  name='acceptedTos'
                  legend='Terms of Service'
                  label='I agree'
                />
              )}
              <CustomSubmit>{isRegister ? "Register" : "Log in"}</CustomSubmit>
            </Box>
          </Form>
        )}
      </Formik>
    </FormTypeProvider>
  );
};

export default UserForm;
