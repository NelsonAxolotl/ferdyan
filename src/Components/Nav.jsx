import "./Nav.css";
import logo from "../Pics/logomanu.png";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const handleNavClick = (path) => {
    setShowLinks(false);
    setActiveLink(path); // Fermer le menu burger
    navigate(path); // Utilisation de navigate pour la navigation
  };
  return (
    <>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className="navbar-logo" onClick={() => handleNavClick("/accueil")}>
          <Link to="/accueil">
            <img src={logo} alt="logo Ferdyan" />
          </Link>
        </div>
        <ul className="navbar-links">
          <Link to="/accueil">
            <li
              className={`navbar-item slideInDown-1 ${
                activeLink === "/accueil" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/accueil")}
              >
                Accueil
              </div>
            </li>
          </Link>

          <Link to="/creation sur mesure">
            <li
              className={`navbar-item slideInDown-2 ${
                activeLink === "/creation sur mesure" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/creation sur mesure")}
              >
                Créations <span>sur mesure</span>
              </div>
            </li>
          </Link>
          <Link to="/chantourage">
            <li
              className={`navbar-item slideInDown-3 ${
                activeLink === "/chantourage" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/chantourage")}
              >
                Chantourage
              </div>
            </li>
          </Link>
          <Link to="/dessins">
            <li
              className={`navbar-item slideInDown-4 ${
                activeLink === "/dessins" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/dessins")}
              >
                Dessins
              </div>
            </li>
          </Link>

          <Link to="/contact">
            <li
              className={`navbar-item slideInDown-5 ${
                activeLink === "/contact" ? "active" : ""
              }`}
            >
              <div
                className="navbar-link"
                onClick={() => handleNavClick("/contact")}
              >
                Contact
              </div>
            </li>
          </Link>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </>
  );
};
export default Nav;
