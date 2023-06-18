import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MinimalButton = styled(Button)({
  color: "inherit",
  "&:hover": {
    backgroundColor: "transparent",
    color: "inherit",
  },
  "&:active": {
    backgroundColor: "transparent",
    color: "inherit",
  },
  "&:focus": {
    outline: "none",
  },
});

export default MinimalButton;
