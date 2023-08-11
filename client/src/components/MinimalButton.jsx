import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MinimalButton = styled(Button)({
  color: "inherit",
  "&:hover": {
    color: "inherit",
  },
  "&:active": {
    color: "inherit",
  },
  "&:focus": {
    outline: "none",
  },
});

export default MinimalButton;
