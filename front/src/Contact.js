import "./style/contact.css";
import { Box } from "@mui/material";
import { useRef } from "react";

function Contact() {
  const scroll = useRef(null);
  const scroll1 = useRef(null);

  return (
    <div>
      <Box
        sx={{
          width: 400,
          height: 500,
          backgroundColor: "#121212",
          display: "inline-block",
          margin: "130px 100px 50px 300px",
          borderRadius: "7px",
          position: "absolute",
        }}
      >
        <h3 className="contact_titre">Comment nous contacter </h3>
        <p className="contact_email">
          Email :
          <a href="reservation@gmail.com" className="contact_email">
            reservation@gmail.com
          </a>
        </p>
        <p className="contact_tel">Tel : 06 12 34 56 78</p>
      </Box>
      <Box
        sx={{
          width: 400,
          height: 500,
          backgroundColor: "#121212",
          display: "inline-block",
          margin: "130px 100px 50px 900px",
          borderRadius: "7px",
        }}
      >
        <h3 className="contact_titre">FAQ</h3>
        <button
          onClick={() => scroll.current.scrollIntoView()}
          className="question"
        >
          Comment réserver ?
        </button>
        <br />
        <button
          onClick={() => scroll1.current.scrollIntoView()}
          className="question"
        >
          Comment savoir si la réservation a bien été effectuée ?
        </button>
      </Box>
      <h3 ref={scroll} className="reponse">
        Comment réserver ?
      </h3>
      <p className="reponse">
        Pour réserver rien de plus facile!! Il suffit de cliquer sur le
        <strong> bouton réserver</strong> en dessous de l'activité sportif de
        votre choix. Si ce bouton est grisé cela signifie qu'il n'y a plus de
        place.
      </p>
      <br />
      <h3 ref={scroll1} className="reponse">
        Comment savoir si la réservation a bien été effectuée ?
      </h3>
      <p className="reponse">
        Votre réservation aura bien été prise en compte si le
        <strong> bouton annuler est bleu</strong>. Vous ne pourrez pas annuler
        <strong> 30 minutes avant</strong> le début de l'activité.
      </p>
    </div>
  );
}

export default Contact;
