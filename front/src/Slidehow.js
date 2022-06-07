import "./style/slidehow.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slidehow() {
  const proprietes = {
    duration: 4000,
    transitionDuration: 1000,
    infinite: true,
    arrows: true,
  };
  return (
    <div className="container">
      <Slide {...proprietes}>
        <div className="each_slide">
          <img src="tennis.jpg" className="image" />
          <p className="description">
            Sport de raquette où sont opposés deux joueurs ou quatre joueurs
            formant deux équipes de deux.
          </p>
        </div>
        <div className="each_slide">
          <img src="judo.jpg" className="image" />
          <p className="description">
            Art martial, créé au Japon en 1882 par Jigorō Kanō en tant que
            pédagogie physique, mentale et morale.
          </p>
        </div>
        <div className="each_slide">
          <img src="body_combat.jpg" className="image" />
          <p className="description">
            Cours de fitness pré-chorégraphié de forte intensité basé sur des
            mouvements d'arts martiaux et d'autres sports de combats.
          </p>
        </div>
        <div className="each_slide">
          <img src="zumba.jpg" className="image" />
          <p className="description">
            Programme d'entraînement physique complet, alliant tous les éléments
            de la remise en forme : cardio et préparation musculaire, équilibre
            et flexibilité.
          </p>
        </div>
        <div className="each_slide">
          <img src="boxe.jpg" className="image" />
          <p className="description">
            Sport de combat de percussion qui consiste, pour deux adversaires
            équipés de gants et de chaussons, à se porter des coups avec les
            poings et les pieds.
          </p>
        </div>
      </Slide>
    </div>
  );
}

export default Slidehow;
