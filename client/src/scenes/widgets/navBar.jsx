import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import StyledButton from "../../components/StyledButton";
import MinimalButton from "../../components/MinimalButton";
import PopupComponent from "../../components/PopupComponent";
import UserForm from "../landingPage/UserForm";
import { useFormType } from "../landingPage/formContext";

const NavBar = () => {
  const { formType, updateFormType } = useFormType();

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          color: "black",
          backgroundColor: "transparent",
          height: "100px",
          fontWeight: "100px",
          padding: "0.5rem",
        }}
      >
        <Typography
          variant='h3'
          flexGrow={1}
        >
          ventEvent
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <MinimalButton disableRipple>
            <Typography variant='h6'>About</Typography>{" "}
            {/*write an about for this project, the purpose of the site, your goals, and the audience/users you want to cultivate */}
          </MinimalButton>

          <PopupComponent
            label='Log in'
            type='login'
            sx={{ fontSize: "1em" }}
          >
            <UserForm />
          </PopupComponent>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
// still need to give links to buttons, 550 width switch to mobile
export default NavBar;
