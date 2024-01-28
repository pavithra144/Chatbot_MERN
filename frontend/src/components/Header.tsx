import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import "./header.css";
import { useContext } from "react";
import MainLink from "../custom-components/Link";
import AuthContext from "../context/AuthContext";

function Header() {
  const useAuth = useContext(AuthContext);
  console.log(useAuth?.isLoggedIn, "isloggedin");
  return (
    <AppBar sx={{ bgcolor: "rgb(18, 5, 5)" }}>
      <Toolbar className="header-content">
        <Logo />
        <div >
          {useAuth?.isLoggedIn ? (
            <>
              <MainLink
                to="/chats"
                bg="#00fffc"
                text="Your chats"
                textColor="black"
                className="yourChats"
              />
              <MainLink to="/" bg="#51538f" text="Logout" textColor="white"  className="logout"/>
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
