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
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginTop: "25vh", marginBottom: "2rem" }}
        >
          {/* Right Section */}
          <Typography variant="h1">For Adventurers</Typography>
          <Typography variant="h2">Another way to connect</Typography>
          <form>
            <TextField label="Name" fullWidth margin="normal" />
            <TextField label="Email" fullWidth margin="normal" />
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
