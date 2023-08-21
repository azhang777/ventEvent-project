import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { FormTypeProvider } from "../landingPage/formContext";
import NavBar from "../widgets/NavBar";
const Home = () => {
  const { username } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  return (
    <FormTypeProvider>
      <NavBar scene='home' />
      <Box>
        <Typography variant='h4'>Welcome Home, {username}!</Typography>
        <Typography variant='h4'>
          Your authentication status is currently{" "}
          {token ? "active" : "unactive"}
        </Typography>
      </Box>
    </FormTypeProvider>
  );
};

export default Home;
