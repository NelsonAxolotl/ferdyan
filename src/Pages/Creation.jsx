import { useState } from "react";
import "./Creation.css";
import escaliers from "../Pics/escaliers.png";
import escaliers2 from "../Pics/escaliers2.png";
import escaliers3 from "../Pics/escaliers3.webp";
import escaliers4 from "../Pics/escaliers4.webp";
import biblidraw from "../Pics/biblidraw.webp";
import biblio from "../Pics/biblio.webp";
import bureau from "../Pics/bureau.webp";
import boutique from "../Pics/boutique.webp";
import boutique2 from "../Pics/boutique2.webp";
import enfant1 from "../Pics/enfant1.webp";
import enfant2 from "../Pics/enfant2.webp";
import reno1 from "../Pics/reno1.webp";
import reno2 from "../Pics/reno3.webp";
import reno5 from "../Pics/reno5.webp";
import reno6 from "../Pics/reno6.webp";
import reno3 from "../Pics/reno2.webp";
import reno4 from "../Pics/reno4.webp";

const Creation = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <div className="creation">
        <div className="crea">
          <h1 className="slide-in">Création </h1>
          <h2 className="slide-in">sur mesure</h2>
        </div>
        <div className="underline-crea"></div>
        <div className="proposxx">
          <p>
            Passionnée par le design et l&#39;artisanat, je me spécialise dans
            la restauration et la création de meubles sur mesure. <br />
            Mon approche se distingue par une attention particulière aux besoins
            uniques de chaque client, tous des particuliers, en optimisant
            l&#39;espace disponible et en intégrant des solutions innovantes et
            esthétiques.
          </p>
          <p>
            Chaque projet est une nouvelle occasion d’explorer ma créativité, de
            transformer un espace aussi contraignant soit-il, en un lieu
            fonctionnel et harmonieux. <br />
            Mon processus commence par une rencontre chez vous, où je prends le
            temps de comprendre vos envies, vos besoins et la personnalité de
            votre intérieur. <br />
            Ensemble, nous imaginons une pièce qui vous ressemble, en
            choisissant les dimensions, les matériaux et les finitions qui
            feront de votre meuble un élément unique, à la fois pratique et
            esthétique.
          </p>
        </div>

        <div className="pic-item10">
          <div className="image-item6">
            <img
              src={escaliers3}
              alt="bibliothèque sous escaliers"
              width="200px"
              height="280px"
              onClick={() => handleImageClick(escaliers3)}
              loading="lazy"
            />
            <img
              src={escaliers4}
              alt="bibliothèque sous escaliers"
              width="853px"
              height="1218px"
              onClick={() => handleImageClick(escaliers4)}
              loading="lazy"
            />
            <img
              src={biblidraw}
              alt="bibliothèque dessin"
              width="642px"
              height="615px"
              onClick={() => handleImageClick(biblidraw)}
              loading="lazy"
            />

            <p>Bibliothèque sous escalier</p>
            <div className="crea-text">
              <span>conçue avec une partie amovible </span>
              <span>dans le cas d’un déménagement</span>
            </div>
            <div className="image-item6">
              <img
                src={enfant1}
                alt="chambre enfant"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(enfant1)}
                loading="lazy"
              />
              <img
                src={enfant2}
                alt="chambre enfant"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(enfant2)}
                loading="lazy"
              />

              <p>Réaménagement d’une chambre d’enfant </p>
              <div className="crea-text">
                <span>associant le bureau d’origine à </span>
                <span>un ensemble de rangement et dressing</span>
              </div>
            </div>
            <div className="image-item6">
              <img
                src={escaliers}
                alt="escaliers"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(escaliers)}
                loading="lazy"
              />
              <img
                src={escaliers2}
                alt="escaliers"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(escaliers2)}
                loading="lazy"
              />

              <p>Escaliers à pas japonnais, rangements intégrés</p>
            </div>
          </div>
          <div className="image-item6">
            <img
              src={bureau}
              alt="bureau"
              width="833px"
              height="809px"
              onClick={() => handleImageClick(bureau)}
              loading="lazy"
            />
            <p>Bureau : structure en sapin </p>
            <span>revêtement en Corian</span>

            <div className="image-item6">
              <img
                src={biblio}
                alt="bureau"
                width="480px"
                height="640px"
                onClick={() => handleImageClick(biblio)}
                loading="lazy"
              />
              <p>Réaménagement d’une chambre d’enfant </p>

              <span>Dressing et bureau relooké</span>
            </div>
            <div className="image-item6">
              <img
                src={boutique2}
                alt="boutique"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(boutique2)}
                loading="lazy"
              />
              <img
                src={boutique}
                alt="boutique"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(boutique)}
                loading="lazy"
              />
              <p>Devanture boutique en lettrage peint</p>
            </div>
          </div>
        </div>
        <div className="crea-titre">
          <h2>Avant / Après</h2>
        </div>
        <div className="pic-flex">
          <div className="pic-item10">
            <div className="image-item6">
              <img
                src={reno1}
                alt="renovation salle bain"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(reno1)}
                loading="lazy"
              />
              <img
                src={reno2}
                alt="renovation salle de bain"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(reno2)}
                loading="lazy"
              />
              <div className="image-item6">
                <img
                  src={reno5}
                  alt="renovation cuisine"
                  width="200px"
                  height="280px"
                  onClick={() => handleImageClick(reno5)}
                  loading="lazy"
                />
                <img
                  src={reno6}
                  alt="renovation cuisine"
                  width="200px"
                  height="280px"
                  onClick={() => handleImageClick(reno6)}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="image-item6 right-images">
              <img
                src={reno4}
                alt="renovation salle de bain"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(reno4)}
                loading="lazy"
              />
              <img
                src={reno3}
                alt="renovation salle de bain"
                width="200px"
                height="280px"
                onClick={() => handleImageClick(reno3)}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {enlargedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged" />
            <button className="close-button" onClick={handleCloseImage}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Creation;
