import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  color: "white",
  backgroundColor: "#434A51",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#59616A",
  },
});

export default StyledButton;
