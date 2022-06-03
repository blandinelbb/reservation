import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

function Acceuil() {
  return (
    <div id="acceuil">
      <p>Bienvenue sur notre site de réservation </p>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          display: "inline-block",
          margin: "60px",
          borderRadius: "7px",
        }}
      >
        <h4 id="typeSport">Tennis</h4>
        <img src="../public/tennis.jpg" />
      </Box>
      <Box
        activeclassname="image"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          display: "inline-block",
          margin: "60px",
          borderRadius: "7px",
        }}
      >
        <h4 id="typeSport">Tennis</h4>
        <img src="../public/judo.jpg" />
      </Box>
      <Box
        activeclassname="image"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          display: "inline-block",
          margin: "60px",
          borderRadius: "7px",
        }}
      ></Box>
      <Box
        activeclassname="image"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          display: "inline-block",
          margin: "60px",
          borderRadius: "7px",
        }}
      ></Box>
      <Box
        activeclassname="image"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          display: "inline-block",
          margin: "60px",
          borderRadius: "7px",
        }}
      ></Box>
      <p>Réserver maintenant le sport de votre choix</p>
      <Button variant="contained" id="reserver" sx={{ margin: "50px 570px" }}>
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
