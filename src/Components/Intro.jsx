import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Importation de PropTypes
import "./Intro.css";

const Intro = ({ onComplete }) => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Démarre l'effet de fondu sortant après l'animation d'entrée
    const timerFadeOut = setTimeout(() => {
      setFadeOut(true);
      // Redirige après la fin de l'animation de fondu sortant
      setTimeout(() => {
        navigate("/"); // Assurez-vous que ce chemin est correct
        if (onComplete) onComplete(); // Appelle la fonction de fin si elle est définie
      }, 2000); // Durée de l'animation de fondu sortant
    }, 3000); // Durée de l'animation d'entrée

    // Nettoyage des timers si le composant est démonté
    return () => {
      clearTimeout(timerFadeOut);
    };
  }, [navigate, onComplete]);

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
  onComplete: PropTypes.func, // Vérifie que onComplete est une fonction
};

export default Intro;
