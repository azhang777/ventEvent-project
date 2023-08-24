import { Typography, Box, Grid } from "@mui/material";
import NavBar from "../widgets/NavBar";
import PopupComponent from "../../components/PopupComponent";
import UserForm from "./UserForm";
//min width 1000px for desktop, otherwise go to mobile view
import TestContext from "./TestContext";
import { FormTypeProvider } from "./formContext";

const LandingPage = () => {
  return (
    <FormTypeProvider>
      <NavBar
        scene='landing'
        label='login'
        type='login'
      />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        minHeight='50vh'
      >
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
              sx={{ margin: "15vh 0 2vh 0" }}
            >
              <Typography variant='h1'>For Adventurers</Typography>
              <Typography variant='h2'>Another way to connect</Typography>
            </Grid>
            <Grid>
              <PopupComponent
                label='Create an account'
                type='register'
                sx={{ maxWidth: "350px" }}
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
export default LandingPage;
