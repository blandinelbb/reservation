import "./style/navigation.css";
import { Link } from "react-router-dom";

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
            Réserver
          </Link>
        </li>
        <li>
          <Link to="/contact" activeclassname="nav_active" id="link">
            Contact & FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
