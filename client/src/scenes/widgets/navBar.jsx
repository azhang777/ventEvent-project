import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import MinimalButton from "../../components/MinimalButton";
import PopupComponent from "../../components/PopupComponent";
import UserForm from "../landingPage/UserForm";
import FlexBetween from "../../components/FlexBetween";
import LogoutButton from "../../components/LogoutButton";
import { useSelector } from "react-redux";
const NavBar = ({ scene }) => {
  const token = useSelector((state) => state.token);
  const returningUser = Boolean(token); //needed to retrieve state in navbar because if we do it in popup component, state will not be retrieved until popup component is clicked.
  //this would mean that we would have to click login button twice for authenicated users to automatically log in.

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          color: "black",
          backgroundColor: "transparent",
          height: "4em",
          fontWeight: "14vw",
          padding: "0.5em 1em 0.5em 2em",
        }}
      >
        <Typography
          variant='h3'
          flexGrow={1}
        >
          ventEvent
        </Typography>
        <FlexBetween sx={{ gap: "1.5em" }}>
          {scene === "landing" && (
            <MinimalButton disableRipple>
              <Typography variant='h5'>About</Typography>
              {/*write an about for this project, the purpose of the site, your goals, and the audience/users you want to cultivate */}
            </MinimalButton>
          )}

          {scene === "home" ? (
            //<LogoutButton sx={{ fontSize: "1.5em" }} />
            <PopupComponent
              label='Log out'
              type='logout'
            >
              <LogoutButton />
            </PopupComponent>
          ) : (
            <PopupComponent
              label='Log in'
              type='login'
              returningUser={returningUser}
            >
              {/*SINCE LOG IN BUTTON IS IN THE NAV BAR AND REGISTER BUTTON IS IN INDEX, check comment in popup component line 35 */}
              <UserForm />
            </PopupComponent>
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};
// still need to give links to buttons, 550 width switch to mobile
export default NavBar;
