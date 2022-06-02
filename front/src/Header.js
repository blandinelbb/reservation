import Acceuil from "./Acceuil";
import Reservation from "./Reservation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BottomNavigation } from "@mui/material";

function Header() {
  return (
    <div>
      <header>
        <BottomNavigation sx={{ height: 100, color: "brun" }} label="nav_bar">
          <h1 id="titre"> Equi Meet </h1>
        </BottomNavigation>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Acceuil />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default Header;
