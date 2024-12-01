import { useState } from "react";
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
  const images = [commode2, commode1];
  const [enlargedImage1, setEnlargedImage1] = useState(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const updateEnlargedImage = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images.length) {
      setCurrentIndex1(index);
      setEnlargedImage1(images[index]);
    }
  };

  // Gestion des clics
  const handleImageClick1 = (index) => updateEnlargedImage(index);

  // Ferme l'image agrandie
  const handleCloseImage1 = () => setEnlargedImage1(null);

  // Navigue vers l'image suivante
  const handleNextImage1 = () => {
    const nextIndex = (currentIndex1 + 1) % images.length;
    updateEnlargedImage(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage1 = () => {
    const prevIndex = (currentIndex1 - 1 + images.length) % images.length;
    updateEnlargedImage(prevIndex);
  };
  return (
    <>
      <div className="fix">
        <div className="crea">
          <h1 className="slide-in">Réparation</h1>
        </div>
        <div className="underline-fixe"></div>

        <div className="proposxx">
          <p>
            Un meuble en bois usé, même démodé peut retrouver une seconde vie,
            ce pourquoi mon expertise s’étend également à la restauration de vos
            meubles auxquels vous êtes attachés pour leur faire peau neuve, ou
            les transformer pour les revaloriser en y apportant une touche
            contemporaine. <br />
            Pour se faire, je m’engage à utiliser des matériaux de qualité pour
            allier durabilité et esthétisme.
          </p>
        </div>
        <div className="pic-item8">
          <div className="image-item">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`commode${index + 1}`}
                onClick={() => handleImageClick1(index)}
                loading="lazy"
              />
            ))}

            {enlargedImage1 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage1}>
                    ⬅
                  </button>
                  <img src={enlargedImage1} alt="Enlarged cerf" />
                  <button className="next-button" onClick={handleNextImage1}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage1}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <div className="image-item5">
              <img
                src={coffre}
                alt="coffre"
                onClick={() => handleImageClick(coffre)}
                width="567px"
                height="621px"
                loading="lazy"
              />
            </div>
          </div>
          <div className="image-item4">
            <img
              src={chaise}
              alt="chaise"
              onClick={() => handleImageClick(chaise)}
              width="400px"
              height="260px"
              loading="lazy"
            />
            <img
              src={chaise2}
              alt="chaise"
              onClick={() => handleImageClick(chaise2)}
              width="842px"
              height="595px"
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
    </>
  );
};

export default Fixe;
