import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import commode from "../Pics/commode1.webp";
import escalier from "../Pics/escaliers3.webp";
import cerf from "../Pics/cerf1.webp";

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
                  width="600"
                  height="400"
                  fetchpriority="high"
                />
                <div className="image-text">Création sur mesure</div>
              </Link>
            </div>

            <div className="image-container">
              <Link to="/reparation">
                <img
                  src={commode}
                  alt="commode"
                  width="600"
                  height="400"
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
                  width="600"
                  height="400"
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
          <div className="icon-text">
            <div className="proposxxx">
              <p>"Pour découvrir mes dernières créations </p>
              <span>et suivre mon actualité,</span>{" "}
            </div>
            <div className="proposxxx">
              <p>n'hésitez pas à me rejoindre sur les </p>{" "}
              <span>réseaux sociaux."</span>
            </div>
          </div>
          <div className="icons">
            <div className="facebook">
              <a
                href="https://www.facebook.com/share/6UYmdLdVgbVBgwvp/"
                aria-label="Emmanuelle Ferdyan"
                title="Suivez-moi sur Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="insta">
              <a
                href="https://www.instagram.com/emmanuelle_ferdyan/profilecard/?igsh=MXZiZ3dvM29zajVidQ=="
                aria-label="Emmanuelle ferdyan"
                title="Suivez-moi sur Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
