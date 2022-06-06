import "./style/header.css";
import Navigation from "./Navigation";
import { BottomNavigation } from "@mui/material";

function Header() {
  return (
    <div>
      <header>
        <BottomNavigation
          sx={{ height: 100, backgroundColor: "#121212" }}
          label="nav_bar"
        >
          <h1 id="titre">Sport</h1>
          <Navigation />
        </BottomNavigation>
      </header>
    </div>
  );
}

export default Header;
