import "./style/acceuil.css";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

function Acceuil() {
  return (
    <div id="acceuil">
      <p id="texte">
        Bienvenue sur notre site de réservation de sport. Une envie de faire du
        sport ? Venez réservez maintenant votre place dans nos locaux.
      </p>
      <Box
        id="box1"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          margin: "30px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Tennis</h3>
        <img src="tennis.jpg" />
      </Box>
      <h5>Description tennis</h5>
      <br />
      <Box
        id="box2"
        activeclassname="image"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          margin: "30px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Judo</h3>
        <img src="judo.jpg" />
      </Box>
      <h5>Description tennis</h5>
      <Box
        id="box3"
        activeclassname="image"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          margin: "30px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Body combat</h3>
        <img src="body_combat.jpg" />
      </Box>
      <h5>Description tennis</h5>
      <Box
        id="box4"
        activeclassname="image"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          margin: "30px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Zumba</h3>
        <img src="zumba.jpg" />
      </Box>
      <h5>Description tennis</h5>
      <Box
        id="box5"
        activeclassname="image"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          margin: "30px",
          borderRadius: "7px",
        }}
      >
        <h3 id="typeSport">Savate boxe française</h3>
        <img src="boxe.jpg" />
      </Box>
      <h5>Description tennis</h5>
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
