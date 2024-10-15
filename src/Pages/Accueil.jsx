import { useState, useEffect } from "react";
import manu from "../Pics/manu.webp";
import "./Accueil.css";

const Accueil = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Déclencher l'animation de fondu entrant après que le composant soit monté
    setFadeIn(true);
  }, []);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className={`accueil-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="main">
        <h1 className="slide-in">À propos</h1>
        <div className="underline"></div>
        <div className="propos">
          <p>
            Fille d’un père artisan autodidacte spécialisé dans le travail du
            bois et de la pierre, Emmanuelle FERDYAN a toujours été passionnée
            par le dessin. <br />
            Elle poursuit des études supérieures aux Beaux-Arts de Toulon, où
            elle se spécialise en design d’espace et en arts plastiques de 1996
            à 2000.
          </p>
        </div>
        <div className="picma">
          <div className="propos">
            <div className="textco">
              <p>
                Son intérêt pour le corps humain comme support de création va
                lui permettre de développer un questionnement sur la notion de
                volumétrie et ergonomie ou encore sur son empreinte morale et
                physique. <br />
                Après avoir obtenu son Diplôme National d’Arts et Techniques
                (D.N.A.T.) ainsi que son Diplôme National d’Arts Plastiques
                (D.N.A.P.), elle achève son cursus à l’École supérieure d’art et
                de design de Saint-Étienne, Son Diplôme National Supérieur
                d’Expression Plastique (D.N.S.E.P.) en poche, elle s’installe à
                Lyon en 2003. <br />
                Malgré les emplois alimentaires qu’elle cumule, Emmanuelle
                continue de dessiner et de fabriquer ses propres meubles,
                adaptés à ses besoins, à son budget, et aux matériaux qu’elle
                récupère dans la rue. <br />
                Elle redonne vie à des éléments, en les réparant ou les
                transformant selon son inspiration.
              </p>
              <p>
                En 2011, elle teste son activité de conception et de fabrication
                de meubles sur mesure au sein d’une couveuse d’entreprises.{" "}
                <br />
                De 2013 à 2015, elle anime des ateliers de dessin pour le public
                d’ARTAGORA, en collaboration avec Damien Capelazzi, historien et
                critique d’art, avec qui elle mènera de nombreux projets, comme
                la participation au spectacle FIGTH ART ou encore des résidences
                d’artistes en milieu scolaire.
              </p>
            </div>
          </div>
          <img
            src={manu}
            alt="photo de Emmanuelle Ferdyan artiste"
            onClick={() => handleImageClick(manu)}
            loading="lazy"
          />
        </div>
        <div className="propos">
          <p>
            En 2018, forte de 18 mois de formation en menuiserie et ébénisterie
            dans un atelier d’insertion, elle crée sa propre entreprise.
          </p>
          <p>
            Emmanuelle navigue avec aisance entre le design et l’art, entre
            l’espace et l’objet.
          </p>
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
    </div>
  );
};

export default Accueil;
