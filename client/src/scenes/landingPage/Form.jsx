//import { useFormik } from "formik";
import * as yup from "yup"; //* imports everything from dependency
import { Field, Form, Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import CustomCheckbox from "../../components/CustomCheckbox";
//import CustomSelect from "../../components/CustomSelect";
import CustomSubmit from "../../components/CustomSubmit";
import { Box } from "@mui/material";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

/* const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
}); */

const registerSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5, "Minimum length of 5")
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service")
    .required("Please read and accept terms of service"),
});

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const advancedForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", acceptedTos: false }}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
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
            <CustomCheckbox
              name='acceptedTos'
              legend='Terms of Service'
              label='I agree'
            />
            <CustomSubmit>Register</CustomSubmit>
          </Box>
        </Form>
      )}
    </Formik>
    /*  <form
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <label htmlFor='email'>Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id='email'
        type='email'
        placeholder='Enter your email'
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}
      <label htmlFor='age'>Age</label>
      <input
        id='age'
        type='number'
        placeholder='Enter your age'
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className='error'>{errors.age}</p>}
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className='error'>{errors.password}</p>
      )}
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm password'
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className='error'>{errors.confirmPassword}</p>
      )}
      <button
        disabled={isSubmitting}
        type='submit'
      >
        Submit
      </button>
    </form> */
  );
};
export default advancedForm;

/* import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FlexBetween from "../../components/FlexBetween";

const registerSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
}); */

// const registerSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   username: yup.string().required("required"),
//   password: yup.string().required("required"),
// });

// const loginSchema = yup.object().shape({
//   email: yup.string().email("invalid email").required("required"),
//   password: yup.string().required("required"),
// });

// const initialValuesRegister = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   username: "",
//   password: "",
// };

// const initialValuesLogin = {
//   email: "",
//   password: "",
// };

// {
//   /*May not need this since we have no palette, if not needed, remove and change back to TextField */
// }
// const StyledTextField = styled(TextField)({
//   "& .MuiInputBase-root.Mui-focused": {
//     outline: "",
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#434A51",
//     },
//   },
// });

// const Form = () => {
//   const [pageType, setPageType] = useState("login");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const isLogin = pageType === "login";
//   const isRegister = pageType === "register";

//   const register = async (values, onSubmitProps) => {
//     // this allows us to send form info with image
//     const formData = new FormData();
//     for (let value in values) {
//       formData.append(value, values[value]);
//     }
//     formData.append("picturePath", values.picture.name);

//     const savedUserResponse = await fetch(
//       "http://localhost:3001/auth/register",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     const savedUser = await savedUserResponse.json();
//     onSubmitProps.resetForm();

//     if (savedUser) {
//       setPageType("login");
//     }
//   };

//   const login = async (values, onSubmitProps) => {
//     const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     });
//     const loggedIn = await loggedInResponse.json();
//     onSubmitProps.resetForm();
//     if (loggedIn) {
//       dispatch(
//         setLogin({
//           user: loggedIn.user,
//           token: loggedIn.token,
//         })
//       );
//       navigate("/home");
//     }
//   };

//   const handleFormSubmit = async (values, onSubmitProps) => {
//     if (isLogin) await login(values, onSubmitProps);
//     if (isRegister) await register(values, onSubmitProps);
//   };

//   return (
//     <Formik
//       onSubmit={handleFormSubmit}
//       initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
//       validationSchema={isLogin ? loginSchema : registerSchema}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//         setFieldValue,
//         resetForm,
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <Box
//             display="grid"
//             gap="30px"
//             gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//             sx={{
//               "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//             }}
//           >
//             {isRegister && (
//               <>
//                 <StyledTextField
//                   label="First Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.firstName}
//                   name="firstName"
//                   error={
//                     Boolean(touched.firstName) && Boolean(errors.firstName)
//                   }
//                   helperText={touched.firstName && errors.firstName}
//                   sx={{ gridColumn: "span 2" }}
//                 />
//                 <StyledTextField
//                   label="Last Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.lastName}
//                   name="lastName"
//                   error={Boolean(touched.lastName) && Boolean(errors.lastName)}
//                   helperText={touched.lastName && errors.lastName}
//                   InputProps={{ disableUnderline: true }}
//                   inputProps={{ style: { outline: "none" } }} // Remove blue outline
//                   sx={{ gridColumn: "span 2" }}
//                 />
//                 <StyledTextField
//                   label="Username"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.username}
//                   name="username"
//                   error={Boolean(touched.username) && Boolean(errors.username)}
//                   helperText={touched.username && errors.username}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//               </>
//             )}

//             <StyledTextField
//               label="Email"
//               onBlur={handleBlur}
//               onChange={handleChange}
//               value={values.email}
//               name="email"
//               error={Boolean(touched.email) && Boolean(errors.email)}
//               helperText={touched.email && errors.email}
//               sx={{ gridColumn: "span 4" }}
//             />
//             <StyledTextField
//               label="Password"
//               type="password"
//               onBlur={handleBlur}
//               onChange={handleChange}
//               value={values.password}
//               name="password"
//               error={Boolean(touched.password) && Boolean(errors.password)}
//               helperText={touched.password && errors.password}
//               sx={{ gridColumn: "span 4" }}
//             />
//           </Box>

//           {/* BUTTONS */}
//           <Box>
//             <Button
//               fullWidth
//               type="submit"
//               sx={{
//                 m: "2rem 0",
//                 p: "1rem",
//                 backgroundColor: "#434A51",
//                 borderRadius: "2rem",
//                 color: "#FFFFFF",
//                 "&:hover": { backgroundColor: "#636E7A" },
//               }}
//             >
//               {isLogin ? "LOGIN" : "REGISTER"}
//             </Button>
//             <Typography
//               onClick={() => {
//                 setPageType(isLogin ? "register" : "login");
//                 resetForm();
//               }}
//               sx={{
//                 textDecoration: "underline",
//                 color: "#434A51",
//                 "&:hover": {
//                   cursor: "pointer",
//                   color: "#636E7A",
//                 },
//               }}
//             >
//               {isLogin
//                 ? "Don't have an account? Sign Up here."
//                 : "Already have an account? Login here."}
//             </Typography>
//           </Box>
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default Form;
