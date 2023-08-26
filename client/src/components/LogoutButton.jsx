import { setLogout } from "../state";
import StyledButton from "./StyledButton";
import { useDispatch, useSelector } from "react-redux";

//logout button is just a button to set user.id and .token to null and return them to landing page.

const LogoutButton = ({ ...sx }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(setLogout());
    console.log("poopoo pee pee " + token);
  };

  return (
    <StyledButton
      sx={{ fontSize: "0.4em", ...sx }}
      onClick={handleLogout} //don't use handleLogout() -> the parenthesis trigger the function and thats why you kept getting logged out when trying to log in.
    >
      Yes
    </StyledButton>
  );
};

export default LogoutButton;
