import { useState, useEffect, useRef } from "react";
import "./Creation.css";
import escaliers from "../Pics/escaliers.png";
import escaliers2 from "../Pics/escaliers2.png";
import escaliers3 from "../Pics/escaliers3.webp";
import escaliers4 from "../Pics/escaliers4.webp";
import biblio from "../Pics/biblio.webp";
import bureau from "../Pics/bureau.webp";
import bureau2 from "../Pics/bureau2.webp";
import boutique from "../Pics/boutique.webp";
import boutique2 from "../Pics/boutique2.webp";
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
          <h2>Galerie</h2>
        </div>
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
