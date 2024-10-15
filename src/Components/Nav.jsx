import "./Nav.css";
import logo from "../Pics/logomanu.webp";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleNavClick = (path) => {
    setShowLinks(false);
    setActiveLink(path);
    navigate(path);
  };

  return (
    <nav
      className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="navbar-logo"
        onClick={() => handleNavClick("/")}
        aria-label="Retour à l'accueil"
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo Ferdyan"
            width="290px"
            height="120px"
            loading="eager"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        {[
          { path: "/", label: "Accueil", className: "slideInDown-1" },
          {
            path: "/creation-sur-mesure",
            label: "Création sur mesure",
            className: "slideInDown-2",
          },
          {
            path: "/chantournage",
            label: "Chantournage",
            className: "slideInDown-3",
          },
          { path: "/dessins", label: "Dessins", className: "slideInDown-4" },
          { path: "/contact", label: "Contact", className: "slideInDown-5" },
        ].map(
          (
            { path, label, className },
            index // ici, déstructuration de className ajoutée
          ) => (
            <li
              key={index}
              className={`navbar-item ${className} ${
                activeLink === path ? "active" : ""
              }`}
            >
              <Link
                className="navbar-link"
                to={path}
                onClick={() => handleNavClick(path)}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </Link>
            </li>
          )
        )}
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
