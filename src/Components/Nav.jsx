import "./Nav.css";
import logo from "../Pics/logomanu.webp";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
      role="navigation"
    >
      <div className="navbar-logo" aria-label="Retour à l'accueil">
        <Link to="/">
          <img src={logo} alt="logo Ferdyan" />
        </Link>
      </div>
      <ul className="navbar-links">
        {[
          { path: "/", label: "Accueil" },
          { path: "/creation-sur-mesure", label: "Creation sur mesure" },
          { path: "/chantournage", label: "Chantournage" },
          { path: "/dessins", label: "Dessins" },
          { path: "/contact", label: "Contact" },
        ].map(({ path, label }, index) => (
          <li
            key={index}
            className={`navbar-item ${activeLink === path ? "active" : ""}`}
          >
            <Link className="navbar-link" to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="navbar-burger"
        onClick={handleShowLinks}
        aria-label="Toggle navigation"
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
