import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import escalier from "../Pics/escaliers3.webp";
import cerf from "../Pics/cerf1.webp";
import coffre from "../Pics/coffre.webp";

const Home = () => {
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
                  width="853"
                  height="1280"
                  loading="lazy"
                />
                <div className="image-text">Création sur mesure</div>
              </Link>
            </div>

            <div className="image-container">
              <Link to="/reparation">
                <img
                  src={coffre}
                  alt="coffres"
                  width="567"
                  height="621"
                  loading="lazy"
                />
                <div className="image-text">Réparation de meuble</div>
              </Link>
            </div>

            <div className="image-container">
              <Link to="/chantournage">
                <img
                  src={cerf}
                  alt="cerf"
                  width="1200"
                  height="1600"
                  loading="lazy"
                />

                <div className="image-text">Chantournage</div>
              </Link>
            </div>
          </div>
          <div className="proposxx">
            <p>
              Créatrice de meuble et d’agencement sur mesure pour particuliers,
              j’apporte des solutions d’aménagement pour optimiser votre
              intérieur. <br />
              Mes compétences en menuiserie et ébénisterie me permettent de
              réhabiliter votre mobilier existant pour le réintégrer si
              nécessaire en le rénovant ou en le transformant. <br />
              Également artisan chantourneur sur bois, je crée des sculptures
              murales et objets de décoration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
