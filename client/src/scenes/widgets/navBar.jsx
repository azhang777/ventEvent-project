import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";

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
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            fontWeight: "bolder",
            fontFmaily: "Lato",
            margin: "2rem",
          }}
        >
          ventEvent
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <MinimalButton disableRipple>About</MinimalButton>
          {/* <MinimalButton disableRipple>FAQ</MinimalButton> */}
          <StyledButton sx={{ margin: "2rem" }}>Log In</StyledButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
// still need to give links to buttons, 550 width switch to mobile
export default NavBar;
