import "./style/presentation.css";
import Slidehow from "./Slidehow";
import { Box } from "@mui/material";

function Presentation() {
  return (
    <div>
      <p id="texte">
        Bienvenue sur notre site de réservation de sport. Une envie de faire du
        sport ? Venez réservez maintenant votre place dans nos locaux.
      </p>
      <Slidehow />
      <br />
      <Box
        sx={{
          width: 350,
          height: 500,
          backgroundColor: "#121212",
          display: "inline-block",
          margin: "0px 30px 0px 100px",
          borderRadius: "7px",
        }}
      >
        <h3 className="contact">Comment nous contacter </h3>
        <p className="contact">Email : </p>
        <p className="contact">Tel :</p>
      </Box>
    </div>
  );
}

export default Presentation;
