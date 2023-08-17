import { useState } from "react";
import {
  Typography,
  Box,
  styled,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import NavBar from "../widgets/navBar";
import PopupComponent from "../../components/PopupComponent";
import UserForm from "./UserForm";
import StyledButton from "../../components/StyledButton";
//min width 1000px for desktop, otherwise go to mobile view
import TestContext from "./TestContext";
import { FormTypeProvider } from "./formContext";
const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <FormTypeProvider>
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
            <TestContext />
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
              sx={{ margin: "15vh 0 3vh 0" }}
            >
              <Typography variant='h1'>For Adventurers</Typography>
              <Typography variant='h2'>Another way to connect</Typography>
            </Grid>
            <Grid>
              <PopupComponent
                label='Create an account'
                type='register'
              >
                <UserForm />
              </PopupComponent>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </FormTypeProvider>
  );
};

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints
export default HomePage;
