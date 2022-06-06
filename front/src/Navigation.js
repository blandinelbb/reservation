import { Link } from "react-router-dom";
import "./style/navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link exact="true" to="/" activeclassname="nav_active" id="link">
            Acceuil
          </Link>
        </li>
        <li>
          <Link
            to="/reservation"
            activeclassname="nav_active"
            id="link"
            onClick={() => {
              window.location.href = "/reservation";
            }}
          >
            Réservation
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
