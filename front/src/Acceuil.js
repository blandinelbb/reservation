import "./style/acceuil.css";
import Slidehow from "./Slidehow";

function Acceuil() {
  return (
    <div>
      <p id="texte">
        Bienvenue sur notre site de réservation de sport. Une envie de faire du
        sport ? Venez réservez maintenant votre place dans nos locaux.
      </p>
      <Slidehow />
    </div>
  );
}

export default Acceuil;
