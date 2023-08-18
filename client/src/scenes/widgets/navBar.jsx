import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import StyledButton from "../../components/StyledButton";
import MinimalButton from "../../components/MinimalButton";
import PopupComponent from "../../components/PopupComponent";
import UserForm from "../landingPage/UserForm";
import { useFormType } from "../landingPage/formContext";

const NavBar = () => {
  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          color: "black",
          backgroundColor: "transparent",
          height: "9vh",
          fontWeight: "14vw",
          padding: "0.5rem 1rem 0.5rem 2rem",
        }}
      >
        <Typography
          variant='h3'
          flexGrow={1}
        >
          ventEvent
        </Typography>
        <Box sx={{ display: "flex", gap: "3rem", paddingRight: "3rem" }}>
          <MinimalButton disableRipple>
            <Typography variant='h6'>About</Typography>
            {/*write an about for this project, the purpose of the site, your goals, and the audience/users you want to cultivate */}
          </MinimalButton>

          <PopupComponent
            label='Log in'
            type='login'
            sx={{ fontSize: "1.5em" }}
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
