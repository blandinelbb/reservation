import "./style/slidehow.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slidehow() {
  const proprietes = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
  };
  return (
    <div className="container">
      <Slide {...proprietes}>
        <div className="each_slide">
          <img src="tennis.jpg" className="image" />
          <p>Description</p>
        </div>
        <div className="each_slide">
          <img src="judo.jpg" className="image" />
          <p>Description</p>
        </div>
        <div className="each_slide">
          <img src="body_combat.jpg" className="image" />
          <p>Description</p>
        </div>
        <div className="each_slide">
          <img src="zumba.jpg" className="image" />
          <p>Description</p>
        </div>
        <div className="each_slide">
          <img src="boxe.jpg" className="image" />
          <p>Description</p>
        </div>
      </Slide>
    </div>
  );
}

export default Slidehow;
