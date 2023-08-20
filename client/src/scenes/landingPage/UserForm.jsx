/* import { useState } from "react"; */
import { useFormType, FormTypeProvider } from "./formContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
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

const UserForm = () => {
  /* const [pageType, setPageType] = useState("register"); */
  const { formType } = useFormType();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = formType === "login";
  const isRegister = formType === "register";

  const registerAPI = async (values, actions) => {
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

      if (!response.ok) {
        // Handle non-successful response (e.g., status code other than 200)
        throw new Error(`Registration failed with status ${response.status}`);
      }

      // Handle the response data (e.g., parsing JSON)
      // const data = await response.json();

      // You can perform additional actions here with the response data

      return response;
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Registration error:", error);
      // You can also update your UI or take other appropriate actions in case of an error
      throw error; // Rethrow the error to propagate it up the call stack if needed
    }
  };

  const loginAPI = async (values, actions) => {
    try {
      console.log(values);
      console.log(actions);

      const response = await fetch("http://localhost:6001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        // Handle non-successful response (e.g., status code other than 200)
        throw new Error(`Login failed with status ${response.status}`);
      }

      // Handle the response data (e.g., parsing JSON)
      // const data = await response.json();

      // You can perform additional actions here with the response data
      return response;
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Login error:", error);
      // You can also update your UI or take other appropriate actions in case of an error
      throw error; // Rethrow the error to propagate it up the call stack if needed
    }
  };

  const onSubmit = async (values, actions) => {
    if (isRegister) {
      try {
        const response = await registerAPI(values, actions);
        const newUser = await response.json();
        console.log(newUser);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await loginAPI(values, actions);
        const loggedUser = await response.json();
        console.log(loggedUser.user);
        console.log("Auth Token: " + loggedUser.token);
        if (loggedUser) {
          dispatch(
            setLogin({
              user: loggedUser.user,
              token: loggedUser.token,
            })
          );
          navigate("/home");
          /*We must interact with redux to store in user authentication token and their information. Then navigate to home*/
        }
      } catch (error) {
        console.error(error);
      }
    }
    actions.resetForm();
  };

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
