import "./style/header.css";
import Acceuil from "./Acceuil";
import Reservation from "./Reservation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        </BottomNavigation>
      </header>
    </div>
  );
}

export default Header;
