import { useState, useEffect, useRef } from "react";
import "./Creation.css";
import escaliers from "../Pics/escaliers.png";
import escaliers2 from "../Pics/escaliers2.png";
import escaliers3 from "../Pics/escaliers3.webp";
import biblio from "../Pics/biblio.webp";
import bureau from "../Pics/bureau.webp";
import bureau2 from "../Pics/bureau2.webp";
import boutique from "../Pics/boutique.webp";
import boutique2 from "../Pics/boutique2.webp";
import chaise from "../Pics/chaise.webp";
import chaise2 from "../Pics/chaise2.webp";
import coffre from "../Pics/coffre.webp";
import commode1 from "../Pics/commode1.webp";
import commode2 from "../Pics/commode2.webp";
import enfant1 from "../Pics/enfant1.webp";
import enfant2 from "../Pics/enfant2.webp";

const Creation = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const creationRef = useRef(null);
  const restorationRef = useRef(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    const options = {
      threshold: 0.1, // L'élément doit être au moins 10% visible pour déclencher l'effet
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (creationRef.current) observer.observe(creationRef.current);
    if (restorationRef.current) observer.observe(restorationRef.current);

    return () => {
      if (creationRef.current) observer.unobserve(creationRef.current);
      if (restorationRef.current) observer.unobserve(restorationRef.current);
    };
  }, []);

  return (
    <>
      <div className="creation">
        <div className="titre">
          <h1 className="slide-in">Création sur mesure</h1>
        </div>
        <div className="underline-crea"></div>
        <div className="propos">
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

        <div className="gallerie3">
          <h2>Gallerie</h2>
        </div>

        <div className="items20">
          <h3>Escaliers à pas Japonais</h3>
        </div>

        <div className="pic-item">
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
        </div>
        <div className="items20">
          <h3> Bureau / Bibliothèque</h3>
        </div>
        <div className="pic-item">
          <img
            src={biblio}
            alt="bibliothèque"
            onClick={() => handleImageClick(biblio)}
            loading="lazy"
          />

          <img
            src={bureau}
            alt="bureau"
            onClick={() => handleImageClick(bureau)}
            loading="lazy"
          />
          <img
            src={escaliers3}
            alt="bibliothèque"
            onClick={() => handleImageClick(escaliers3)}
            loading="lazy"
          />
        </div>
        <div className="items25">
          <h3>Réménagement</h3> <span>chambre d&#39;enfant</span>
        </div>
        <div className="pic-item">
          <img
            src={enfant1}
            alt="bibliothèque"
            onClick={() => handleImageClick(enfant1)}
            loading="lazy"
          />

          <img
            src={enfant2}
            alt="bureau"
            onClick={() => handleImageClick(enfant2)}
            loading="lazy"
          />
          <img
            src={bureau2}
            alt="bureau"
            onClick={() => handleImageClick(bureau2)}
            loading="lazy"
          />
        </div>
        <div className="items20">
          <h3>Devanture de boutique</h3>
        </div>
        <div className="pic-item">
          <img
            src={boutique}
            alt="boutique"
            onClick={() => handleImageClick(boutique)}
            loading="lazy"
          />

          <img
            src={boutique2}
            alt="boutique"
            onClick={() => handleImageClick(boutique2)}
            loading="lazy"
          />
        </div>

        {/* Section réparation/restauration avec animation de fondu */}
        <div className="art" ref={restorationRef}>
          <h2>-Réparation / Restauration- </h2>
        </div>
        <div className="propos">
          <p>
            Mon expertise s’étend également à la restauration de vos meubles
            anciens auxquels vous êtes attachés pour leur faire peau neuve, ou
            les transformer pour les revaloriser en y apportant une touche
            contemporaine. <br />
            Je m’engage à utiliser des matériaux de qualité pour allier
            durabilité et esthétisme.
          </p>
        </div>
        <div className="gallerie3">
          <h2>Gallerie</h2>
        </div>

        <div className="items20">
          <h3>Chaise / coffre</h3>
        </div>
        <div className="pic-item">
          <img
            src={chaise}
            alt="chaise"
            onClick={() => handleImageClick(chaise)}
            loading="lazy"
          />
          <img
            src={chaise2}
            alt="chaise"
            onClick={() => handleImageClick(chaise2)}
            loading="lazy"
          />
          <img
            src={coffre}
            alt="coffre"
            onClick={() => handleImageClick(coffre)}
            loading="lazy"
          />
        </div>
        <div className="items20">
          <h3>Commode vintage</h3>
        </div>
        <div className="pic-item">
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
