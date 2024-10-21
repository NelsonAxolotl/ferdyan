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
        <h1 className="slide-in">Création sur mesure</h1>

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
              onClick={() => handleImageClick(escaliers3)}
              loading="lazy"
            />
            <img
              src={escaliers4}
              alt="bibliothèque sous escaliers"
              onClick={() => handleImageClick(escaliers4)}
              loading="lazy"
            />
            <img
              src={biblidraw}
              alt="bibliothèque dessin"
              onClick={() => handleImageClick(biblidraw)}
              loading="lazy"
            />
            <p>
              Bibliothèque sous escalier conçue avec une partie amovible <br />
              dans le cas d’un déménagement
            </p>
            <div className="image-item6">
              <img
                src={enfant1}
                alt="chambre enfant"
                onClick={() => handleImageClick(enfant1)}
                loading="lazy"
              />
              <img
                src={enfant2}
                alt="chambre enfant"
                onClick={() => handleImageClick(enfant2)}
                loading="lazy"
              />
              <p>
                Réaménagement d’une chambre d’enfant associant le
                <br />
                bureau d’origine à un ensemble de rangement et dressing
              </p>
            </div>
            <div className="image-item6">
              <img
                src={escaliers}
                alt="escaliers"
                onClick={() => handleImageClick(escaliers)}
                loading="lazy"
              />
              <img
                src={escaliers2}
                alt="escaliers"
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
              onClick={() => handleImageClick(bureau)}
              loading="lazy"
            />
            <p>
              Bureau : structure en sapin <br />
              revêtement en Corian
            </p>
            <div className="image-item6">
              <img
                src={biblio}
                alt="bureau"
                onClick={() => handleImageClick(biblio)}
                loading="lazy"
              />
              <p>
                Réaménagement d’une chambre d’enfant <br />
                Dressing et bureau relooké
              </p>
            </div>
            <div className="image-item6">
              <img
                src={boutique2}
                alt="boutique"
                onClick={() => handleImageClick(boutique2)}
                loading="lazy"
              />
              <img
                src={boutique}
                alt="boutique"
                onClick={() => handleImageClick(boutique)}
                loading="lazy"
              />
              <p>Devanture boutique en lettrage peint</p>
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
