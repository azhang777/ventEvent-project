import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MinimalButton = styled(Button)({
  color: "inherit",
  "&:hover": {
    color: "#434A51",
    backgroundColor: "transparent",
  },
});

export default MinimalButton;
