import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Intro.css"; // Assurez-vous d'avoir des styles pour le fondu
import logoManu from "../Pics/logomanu.webp";

const Intro = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timerFadeOut = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onComplete) onComplete(); // Appelle la fonction de fin si elle est définie
      }, 2000); // Durée de l'animation de fondu sortant
    }, 3000); // Durée de l'animation d'entrée

    return () => clearTimeout(timerFadeOut);
  }, [onComplete]);

  return (
    <div className={`intro-container ${fadeOut ? "fade-out" : ""}`}>
      <img
        src={logoManu}
        alt="Logo Emmanuelle Ferdyan"
        className="intro-logo"
      />
      <div className={`intro-subtitle ${fadeOut ? "fade-out" : ""}`}></div>
    </div>
  );
};

// Validation des props avec PropTypes
Intro.propTypes = {
  onComplete: PropTypes.func,
};

export default Intro;
