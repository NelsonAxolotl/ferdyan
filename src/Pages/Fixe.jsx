import { useState, useEffect } from "react";
import "./Chantournage.css";
import chaise from "../Pics/chaise.webp";
import chaise2 from "../Pics/chaise2.webp";
import coffre from "../Pics/coffre.webp";
import commode1 from "../Pics/commode1.webp";
import commode2 from "../Pics/commode2.webp";
const Fixe = () => {
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
        <div className="char">
          <h1 className="slide-in">Réparation / Restauration</h1>
          <div className="underline-fixe"></div>

          <div className="propos">
            <p>
              Un meuble en bois usé, même démodé peut retrouver une seconde vie,
              ce pourquoi mon expertise s’étend également à la restauration de
              vos meubles auxquels vous êtes attachés pour leur faire peau
              neuve, ou les transformer pour les revaloriser en y apportant une
              touche contemporaine. Pour se faire, je m’engage à utiliser des
              matériaux de qualité pour allier durabilité et esthétisme.
            </p>
          </div>
          <div className="pic-item1">
            <div className="image-item">
              <img
                src={commode2}
                alt="commode"
                onClick={() => handleImageClick(commode2)}
                loading="lazy"
              />
              <img
                src={commode1}
                alt="commode"
                onClick={() => handleImageClick(commode1)}
                loading="lazy"
              />
            </div>
            <div className="image-item">
              <img
                src={chaise}
                alt="chaise"
                onClick={() => handleImageClick(chaise)}
                loading="lazy"
              />
            </div>
          </div>
          <div className="pic-item1">
            <div className="image-item1">
              <img
                src={coffre}
                alt="coffre"
                onClick={() => handleImageClick(coffre)}
                loading="lazy"
              />
              <img
                src={chaise2}
                alt="chaise"
                onClick={() => handleImageClick(chaise2)}
                loading="lazy"
              />
            </div>
          </div>
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
    </>
  );
};

export default Fixe;
