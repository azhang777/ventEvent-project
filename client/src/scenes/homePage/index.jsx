import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const Home = () => {
  const { username } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  return (
    <Box>
      <Typography variant='h4'>Welcome Home, {username}!</Typography>
      <Typography variant='h4'>
        Your authentication status is currently {token ? "active" : "unactive"}
      </Typography>
    </Box>
  );
};

export default Home;
