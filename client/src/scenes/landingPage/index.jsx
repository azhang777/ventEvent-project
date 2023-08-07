import {
  Typography,
  Box,
  styled,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import NavBar from "../widgets/navBar";
import Form from "./Form";

//min width 1000px for desktop, otherwise go to mobile view

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={6}
          md={6}
        ></Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ marginTop: "25vh", marginBottom: "2rem" }}
        >
          {/* Right Section */}
          <Typography variant='h1'>For Adventurers</Typography>
          <Typography variant='h2'>Another way to connect</Typography>
          //
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints
export default HomePage;
