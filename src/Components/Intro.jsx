import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Intro.css";

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
      <h1 className="intro-text">Emmanuelle Ferdyan</h1>
      <div className={`intro-subtitle ${fadeOut ? "fade-out" : ""}`}>
        Plasticienne Designer
      </div>
    </div>
  );
};

// Validation des props avec PropTypes
Intro.propTypes = {
  onComplete: PropTypes.func,
};

export default Intro;
