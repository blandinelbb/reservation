import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Acceuil() {
  return (
    <div id="acceuil">
      <p>Bienvenue sur notre site de réservation </p>
      <Button variant="contained">
        <Link
          exact="true"
          to="/reservation"
          activeclassname="nav_active"
          id="start_button"
        >
          Réserver
        </Link>
      </Button>
    </div>
  );
}

export default Acceuil;
