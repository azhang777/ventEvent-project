import React, { useState } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import StyledButton from "./StyledButton";

function PopupComponent({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <StyledButton
        onClick={handleToggle}
        sx={{ fontSize: "1.2em" }}
      >
        Open Popup
      </StyledButton>
      <Dialog
        open={toggle}
        onClose={handleToggle}
        PaperProps={{
          style: {
            width: "60%", // Adjust the width as needed
            maxWidth: "none", // Remove maxWidth to prevent width restriction
          },
        }}
      >
        <DialogTitle>USESTATE Create your account / Log in</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
}

export default PopupComponent;
