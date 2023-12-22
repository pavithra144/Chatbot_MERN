import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import useAuth from "../context/AuthContext";
import { useContext } from "react";
import MainLink from "../custom-components/Link";
import AuthContext from "../context/AuthContext";

function Header() {
  const useAuth = useContext(AuthContext);
  console.log(useAuth?.isLoggedIn, "isloggedin");
  return (
    <AppBar sx={{ bgcolor: "blue" }}>
      <Toolbar>
        <Logo />
        <div>
          {useAuth?.isLoggedIn ? (
            <>
              <MainLink
                to="/chats"
                bg="#00fffc"
                text="Your chats"
                textColor="black"
              />
              <MainLink to="/" bg="#51538f" text="Logout" textColor="white" />
            </>
          ) : (
            <>
              <MainLink
                to="/login"
                bg="#00fffc"
                text="Login"
                textColor="black"
              />
              <MainLink
                to="/signup"
                bg="#51538f"
                text="Signup"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
