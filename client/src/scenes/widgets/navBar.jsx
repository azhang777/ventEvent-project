import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import StyledButton from "../../components/StyledButton";
import MinimalButton from "../../components/MinimalButton";

const NavBar = () => {
  return (
    <AppBar
      position="static"
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
        <Typography variant="h2" flexGrow={1}>
          ventEvent
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <MinimalButton disableRipple>
            <Typography variant="h6">About</Typography>
          </MinimalButton>
          {/* <MinimalButton disableRipple>FAQ</MinimalButton> */}
          <StyledButton sx={{ margin: "2rem" }}>
            <Typography variant="h6">Log In</Typography>
          </StyledButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
// still need to give links to buttons, 550 width switch to mobile
export default NavBar;
