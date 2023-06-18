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
const container = styled("div")({
  whiteSpace: "nowrap",
  overflow: "hidden",
});
const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {/* Left Section */}
          <img src="/path/to/graphic-image" alt="Graphic" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          {/* Right Section */}
          <Typography variant="h2">For Adventurers</Typography>
          <Typography variant="body1">Another way to connect</Typography>
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
