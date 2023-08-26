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
import { useFormType } from "../scenes/landingPage/formContext";
import { useNavigate } from "react-router-dom";

const PopupComponent = ({ label, type, sx = {}, returningUser, children }) => {
  const { formType, updateFormType } = useFormType();
  const navigate = useNavigate();

  let message;
  if (type === "logout") {
    message = "Are you sure you want to log out?";
  } else if (formType === "register") {
    message = "Create your account";
  } else {
    message = "Log in";
  }

  const handleReturningUser = () => {
    if (returningUser) {
      navigate("/home");
    }
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    if (type != "logout") {
      updateFormType(type);
    }
  };

  return (
    <div>
      <StyledButton
        onClick={returningUser ? handleReturningUser : handleToggle} //WE DO NOT NEED TO CHECK returningUser && formType === "login"! Thats greatttt!
        sx={{ fontSize: "1.2em", ...sx }}
      >
        {label}
      </StyledButton>
      <Dialog
        open={toggle}
        onClose={handleToggle}
        PaperProps={{
          style: {
            width: "40%", // Adjust the width as needed
            minWidth: "30px", // Remove maxWidth to prevent width restriction
          },
        }}
      >
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupComponent;
