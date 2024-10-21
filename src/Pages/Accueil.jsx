import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import manu from "../Pics/manu.webp";
import "./Accueil.css";

const Accueil = () => {
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
      <div className="main">
        <h1 className="slide-in">Parcours</h1>
        <div className="underline"></div>

        <div className="picma">
          <div className="proposa">
            <p>
              Fille d’un père artisan autodidacte spécialisé dans le travail du
              bois et de la pierre, j’ai toujours été passionné par le dessin et
              le travail manuel. J’ai choisit de poursuivre mes études
              supérieures aux Beaux-Arts de Toulon, où je me spécialise en
              design d’espace et en arts plastiques de 1996 à 2000.
            </p>
            <p>
              Mon intérêt pour le corps humain comme support de création va me
              permettre de développer un questionnement sur la notion de
              volumétrie et ergonomie ou encore sur son empreinte morale et
              physique. <br />
              Après avoir obtenu le Diplôme National d’Arts et Techniques
              (D.N.A.T.) ainsi que le Diplôme National d’Arts Plastiques
              (D.N.A.P.), j’achève mon cursus à l’École supérieure d’art et de
              design de Saint-Étienne où j’obtiens le Diplôme National Supérieur
              d’Expression Plastique en Design produit (D.N.S.E.P.).
            </p>
            <p>
              Installée à Lyon depuis 2003, je continue de dessiner et de
              fabriquer mes propres meubles, en fonction de mes besoins et de
              mon budget. <br />
              En déambulant dans les rues je me rends compte que les gens
              jettent énormément de meubles en bois alors qu’ils ont encore du
              potentiel. <br />
              Je me plais alors à les récupérer quitte à les démonter pour
              n’utiliser que certains éléments pour les transformer selon mon
              inspiration.
            </p>
            <p>
              Plus tard, je teste mon activité de conception et fabrication de
              meubles sur mesure au sein d’une couveuse d’entreprises, et anime
              en parallèle des ateliers de dessin pour le public{" "}
              <Link to="https://artagora.fr/">
                <span>d’ARTAGORA</span>
              </Link>{" "}
              , en collaboration avec <span>Damien Capelazzi</span>, historien
              et critique d’art, avec qui je mènerais de nombreux projets, comme
              la participation au spectacle <span>FIGTH ART</span> ou encore des
              résidences d’artistes en milieu scolaire.
            </p>
            <p>
              Forte de 18 mois de formation en menuiserie et ébénisterie dans un
              atelier d’insertion, qui m’a permit de développer mes compétences,
              je crée ma propre entreprise de création et réparation de meubles
              sur mesure. <br />
              Redonner vie à du mobilier, en le réparant ou le transformant
              devient une de mes préoccupation majeure.
            </p>
          </div>
          <img
            src={manu}
            alt="photo de Emmanuelle Ferdyan artiste"
            onClick={() => handleImageClick(manu)}
            height="300px"
            width="auto"
            loading="lazy"
          />
        </div>
        <div className="propos4">
          <p>
            N’ayant jamais cessé mon questionnement sur la volumétrie, j’associe
            mon attrait pour l’art et la technique de{" "}
            <Link to="/chantournage">
              <span>chantournage</span>
            </Link>{" "}
            pour créer des pièces de décoration uniques. <br />
            Je navigue avec aisance entre le design et l’art, entre l’espace et
            l’objet.
          </p>
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

export default Accueil;
