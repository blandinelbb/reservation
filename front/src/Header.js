import Navigation from "./Navigation";
import { BottomNavigation } from "@mui/material";

function Header() {
  return (
    <div>
      <header>
        <BottomNavigation
          sx={{
            height: 100,
            backgroundColor: "#121212",
            top: "-1px",
            width: "1599px",
          }}
          label="nav_bar"
        >
          <img src={"logo.png"} alt="logo" className="logo" />
          <Navigation />
        </BottomNavigation>
      </header>
    </div>
  );
}

export default Header;
