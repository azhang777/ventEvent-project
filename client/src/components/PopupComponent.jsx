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

  const handleReturningUser = () => {
    if (returningUser) {
      navigate("/home");
    }
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    updateFormType(type);
  };

  return (
    <div>
      <StyledButton
        onClick={returningUser ? handleReturningUser : handleToggle} //WE DO NOT NEED TO CHECK returningUser && formType === "login"! Thats greatttt!
        sx={{ fontSize: "1.5em", ...sx }}
      >
        {label}
      </StyledButton>
      <Dialog
        open={toggle}
        onClose={handleToggle}
        PaperProps={{
          style: {
            width: "40%", // Adjust the width as needed
            minWidth: "500px", // Remove maxWidth to prevent width restriction
          },
        }}
      >
        <DialogTitle>
          {formType === "register" ? "Create your account" : "Log in"}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupComponent;
