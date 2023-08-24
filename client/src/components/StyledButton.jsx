import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  color: "white",
  padding: "8px 20px",
  whiteSpace: "nowrap",
  maxWidth: "160px",
  backgroundColor: "#434A51",
  "&:hover": {
    backgroundColor: "#59616A",
  },
});

export default StyledButton;
