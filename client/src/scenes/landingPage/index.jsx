import { useState } from "react";
import {
  Typography,
  Box,
  styled,
  Grid,
  Button,
  TextField,
  Dialog,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import NavBar from "../widgets/navBar";
import Form from "./Form";

//min width 1000px for desktop, otherwise go to mobile view

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }; //MAKE POPUP FEATURE A COMPONENT? HOW WOULD I HANDLE TOGGLE STATES? WOULD IT BE IN INDIVIUAL AREAS OR IS THE STATE IN THE COMPONENT ITSELF?

  return (
    <Box>
      <NavBar />
      <Grid
        container
        spacing={2}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
        >
          left
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
        >
          <Grid
            container
            direction='column'
            alignItems='flex-start'
            sx={{ margin: "60px 0" }}
          >
            <Typography variant='h1'>For Adventurers</Typography>
            <Typography variant='h2'>Another way to connect</Typography>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              onClick={handleToggle}
            >
              Sign in
            </Button>
            <Dialog
              open={toggle}
              onClick={handleToggle}
            >
              <Form />
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints
export default HomePage;
