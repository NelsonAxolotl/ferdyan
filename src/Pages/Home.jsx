import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import escalier from "../Pics/escaliers3.webp";
import cerf from "../Pics/cerf1.webp";
import coffre from "../Pics/coffre.webp";

const Home = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Déclencher l'animation de fondu entrant après que le composant soit monté
    setFadeIn(true);
  }, []);
  return (
    <>
      <div className={`accueil-container ${fadeIn ? "fade-in" : ""}`}>
        <div className="contain">
          <div className="picture">
            <div className="image-container">
              <Link to="/creation-sur-mesure">
                <img
                  src={escalier}
                  alt="escalier"
                  onClick={() => handleImageClick(escalier)}
                  loading="lazy"
                />
                <div className="image-text">Création sur mesure</div>
              </Link>
            </div>

            <div className="image-container">
              <Link to="/restauration-de-meuble">
                <img
                  src={coffre}
                  alt="coffres"
                  onClick={() => handleImageClick(coffre)}
                  loading="lazy"
                />
                <div className="image-text">Restauration de meuble</div>
              </Link>
            </div>
            <div className="image-container">
              <Link to="/chantournage">
                <img
                  src={cerf}
                  alt="cerf"
                  onClick={() => handleImageClick(cerf)}
                  loading="lazy"
                />
                <div className="image-text">Chantournage</div>
              </Link>
            </div>
          </div>
          <div className="propos">
            <p>
              Créatrice de meuble et d’agencement sur mesure pour particuliers,
              j’apporte des solutions d’aménagement pour optimiser votre
              intérieur. Mes compétences en menuiserie et ébénisterie me
              permettent de réhabiliter votre mobilier existant pour le
              réintégrer si nécessaire en le rénovant ou en le transformant.{" "}
              <br />
              Également artisan chantourneur sur bois, je crée des sculptures
              murales et objets de décoration.
            </p>
          </div>
          {enlargedImage && (
            <div className="overlay" onClick={handleCloseImage}>
              <div className="enlarged-image-container">
                <img src={enlargedImage} alt="Enlarged" />
                <button
                  className="close-button"
                  onClick={handleCloseImage}
                  aria-label="Close image"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
