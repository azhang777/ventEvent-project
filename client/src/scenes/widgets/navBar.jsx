import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

import StyledButton from "../../components/StyledButton";

const NavBar = () => {
  return (
    <AppBar sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{
          color: "black",
          backgroundColor: "#EBEBEB",
          height: "100px",
          fontWeight: "100px",
          padding: "0.5rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{ flexGrow: 1, fontWeight: "bolder", fontFmaily: "Lato" }}
        >
          ventEvent
        </Typography>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Button
            disableRipple
            sx={{
              color: "inherit",
              "&:hover": {
                backgroundColor: "inherit",
                color: "inherit",
              },
              "&:focus": {
                backgroundColor: "inherit",
                color: "inherit",
              },
            }}
          >
            About
          </Button>
          <Button
            disableRipple
            sx={{
              color: "inherit",
              "&:hover": {
                backgroundColor: "inherit",
                color: "inherit",
              },
              "&:focus": {
                backgroundColor: "inherit",
                color: "inherit",
              },
            }}
          >
            FAQ
          </Button>
          <StyledButton>Log In</StyledButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
// still need to give links to buttons
export default NavBar;
