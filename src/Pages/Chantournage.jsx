import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chantournage.css";
import bougeoirs1 from "../Pics/Bougeoir1.webp";
import bougeoirs2 from "../Pics/Bougeoir2.webp";
import bougeoirs3 from "../Pics/bougeoir3.webp";
import bougeoirs4 from "../Pics/bougeoir4.webp";
import bougeoirs5 from "../Pics/bougeoir5.webp";
import bougeoirs6 from "../Pics/bougeoir6.webp";
import cerf1 from "../Pics/cerf1.webp";
import cerf2 from "../Pics/cerf2.webp";
import cerf3 from "../Pics/Cerf3.webp";
import cerf4 from "../Pics/cerf4.webp";
import loup1 from "../Pics/loup1.webp";
import loup2 from "../Pics/loup2.webp";
import loup3 from "../Pics/loup3.webp";
import loup4 from "../Pics/loup4.webp";
import noel5 from "../Pics/noel5.webp";
import noel6 from "../Pics/noel6.webp";
import noel7 from "../Pics/noel7.webp";
import noel8 from "../Pics/noel8.webp";
import repose from "../Pics/repose.webp";
import repose2 from "../Pics/repose2.webp";
import repose3 from "../Pics/repose3.webp";
import repose4 from "../Pics/repose4.webp";
import plat from "../Pics/plat.webp";
import plat2 from "../Pics/plat2.webp";
import jpj from "../Pics/jpj.webp";
import jpj2 from "../Pics/jpj2.webp";
import jpj3 from "../Pics/jpj3.webp";
import jpj4 from "../Pics/jpj4.webp";
import cerffab from "../Pics/cerffab.webp";
import noelfab from "../Pics/noelfab.webp";
import floconfab from "../Pics/floconfab.webp";
import taureau1 from "../Pics/Taureau.webp";
import taureau from "../Pics/taureau2.webp";
import manupic from "../Pics/manupic.webp";
const Chantournage = () => {
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
      <div className="char">
        <h1 className="slide-in">Chantournage</h1>
        <div className="underline-char"></div>
        <div className="chartext">
          <h2>Une technique de découpe qui étend </h2>
          <span>le champ des possibles en Art et Design</span>
        </div>
        <div className="proposx">
          <p>
            Mon intérêt pour le chantournage a pris racine après avoir découvert
            un documentaire sur l&#39;histoire de{" "}
            <Link
              to="https://fr.wikipedia.org/wiki/Joseph_Paul_Jernigan"
              target="_blank"
            >
              <span>Joseph Paul Jernigan</span>
            </Link>
            , un prisonnier américain exécuté en 1993. <br />
            Avant sa mort, il avait accepté de léguer son corps à la science.{" "}
            <br />
            Son cadavre a été congelé, puis découpé en 1 871 tranches de 1 mm
            d’épaisseur, de la tête aux pieds, dans le cadre du projet
            scientifique{" "}
            <Link
              to="https://fr.wikipedia.org/wiki/Visible_Human_Project"
              target="_blank"
            >
              <span>« Visible Human Project »</span>
            </Link>
            . <br />
            Cet événement a profondément modifié ma perception du corps humain
            et du volume.
          </p>
          <p>
            Fascinée par le rendu numérique des images, j’ai réalisé un dessin
            des contours de son visage, rappelant des cartes topographiques.{" "}
            <br />
            Le folioscope « Head 2 heads », qui présente des coupes
            transversales de la tête, m’a inspirée à reconstituer le haut du
            corps de Joseph Paul Jernigan en strates. <br />
            Pour y parvenir, le seul outil me permettant d’effectuer des
            découpes précises, sinueuses et minutieuses est la scie à
            chantourner.
          </p>
        </div>
        <div className="items7">
          <h3>Travail sur </h3>
          <h4>joseph Paul Jernigan</h4>
        </div>
        <div className="pic-item2">
          <div className="image-item">
            <img
              src={jpj}
              alt="jpj"
              onClick={() => handleImageClick(jpj)}
              loading="lazy"
            />
          </div>
          <div className="image-item">
            <img
              src={jpj2}
              alt="jpj"
              onClick={() => handleImageClick(jpj2)}
              loading="lazy"
            />
          </div>
          <div className="image-item">
            <img
              src={jpj3}
              alt="jpj"
              onClick={() => handleImageClick(jpj3)}
              loading="lazy"
            />
          </div>
          <div className="image-item">
            <img
              src={jpj4}
              alt="jpj"
              onClick={() => handleImageClick(jpj4)}
              loading="lazy"
            />
          </div>
        </div>
        <div className="proposx">
          <p>
            Ma démarche artistique s’est développée pour devenir une exploration
            personnelle du règne animal. <br />
            En m’appuyant sur le même principe de strates mais sans pour autant
            reconstituer tout son volume, je conçois des têtes d’animaux aux
            lignes épurées.
          </p>
          <p>
            Le bois contreplaqué que je récupère dans différents chantiers,
            devient sous mes mains des matériaux vivants, transformés en
            sculptures murales qui incarnent la force et l’élégance. <br />A
            travers mes créations, telles que le cerf, le loup, le taureau...,
            je cherche à exprimer la puissance, la grâce et la beauté de la
            nature.
          </p>

          <p>
            Soucieuse de l’impacte sur l’environnement causée par la quantité de
            carton jeté chaque jour, je recycle la matière pour l’emballage de
            chacune des créations.
          </p>
        </div>
        <div className="propos1">
          <p>Chaque pièce présentée sur cette page</p>
          <span>est unique et disponible à la vente.</span>
          <div className={`accueil-container1 ${fadeIn ? "fade-in" : ""}`}>
            <span>
              Pour plus d&#39;informations, veuillez me{" "}
              <Link to="/contact">contacter</Link>.
            </span>
          </div>
        </div>

        <div className="gallerie">
          <h2>Galerie</h2>
        </div>

        <div className="items2">
          <h3>Le Cerf</h3>
        </div>
        <div className="items2cerf"></div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={cerf2}
              alt="cerf"
              onClick={() => handleImageClick(cerf2)}
              loading="lazy"
            />

            <img
              src={cerf1}
              alt="cerf"
              onClick={() => handleImageClick(cerf1)}
              loading="lazy"
            />
            <p>Contreplaqué, brou de noix et vernis aquarétane</p>
            <p>Dimensions : L 46 x l 39 cm x p 4 cm</p>
            <p>Price: 95€</p>
          </div>
          <div className="image-item">
            <img
              src={cerf4}
              alt="cerf"
              onClick={() => handleImageClick(cerf4)}
              loading="lazy"
            />

            <img
              src={cerf3}
              alt="cerf"
              onClick={() => handleImageClick(cerf3)}
              loading="lazy"
            />
            <p>Contreplaqué, brou de noix et vernis aquarétane</p>
            <p>Dimensions: L51 x l 37,5 x p 5 cm</p>
            <p>Price: 130€</p>
          </div>
        </div>
        <div className="items3">
          <h3>Le Loup</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={loup1}
              alt="loup"
              onClick={() => handleImageClick(loup1)}
              loading="lazy"
            />
            <img
              src={loup2}
              alt="loup"
              onClick={() => handleImageClick(loup2)}
              loading="lazy"
            />
            <p>Contreplaqué, brou de noix</p> <p>peinture, vernis aquarétane</p>
            <p>Dimensions : L 37 x l 24 x p 5 cm</p>
            <p>Price: 140€</p>
          </div>
          <div className="image-item">
            <img
              src={loup3}
              alt="loup"
              onClick={() => handleImageClick(loup3)}
              loading="lazy"
            />

            <img
              src={loup4}
              alt="loup"
              onClick={() => handleImageClick(loup4)}
              loading="lazy"
            />
            <p>Contreplaqué, brou de noix</p>
            <p>acrylique noire, vernis aquarétane</p>
            <p>Dimensions: L 37 x l 24 x p 5 cm</p>
            <p>Price: 140€</p>
          </div>
        </div>
        <div className="items3">
          <h3>Le Taureau</h3>
        </div>

        <div className="pic-item">
          <div className="image-item">
            <img
              src={taureau1}
              alt="taureau"
              onClick={() => handleImageClick(taureau1)}
              loading="lazy"
            />

            <img
              src={taureau}
              alt="taureau"
              onClick={() => handleImageClick(taureau)}
              loading="lazy"
            />
            <p>Contreplaqué, brou de noix et vernis aquarétane</p>
            <p>Dimensions : L 48 x l 58 x p 6 cm</p>
            <p>Price: 250€</p>
          </div>
        </div>
        <div className="proposx">
          <p>
            Autodidacte, j’ai perfectionné ma technique de chantournage,
            particulièrement inspirée à l&#39;approche de l’hiver et des fêtes
            de fin d’année. <br />
            Mon stock de chutes de bois et de Corian, accumulé lors de divers
            chantiers, me permet de laisser libre cours à ma créativité,
            notamment pour la réalisation de suspensions pour sapin et d’autres
            objets décoratifs évoquant l&#39;esprit montagnard.
          </p>
        </div>

        <div className="items">
          <h3>Bougeoirs</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={bougeoirs1}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs1)}
              loading="lazy"
            />

            <img
              src={bougeoirs2}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs2)}
              loading="lazy"
            />
            <p>Contreplaqué, vernis acrylique</p>
            <p>Diamètre 15 cm, hauteur 2 cm</p>
            <p>Price: 25€</p>
          </div>

          <div className="image-item">
            <img
              src={bougeoirs3}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs3)}
              loading="lazy"
            />

            <img
              src={bougeoirs4}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs4)}
              loading="lazy"
            />
            <p>Contreplaqué, vernis acrylique</p>
            <p>Diamètre 15 cm, hauteur 2 cm ;</p>
            <p>Price: 35€</p>
          </div>
        </div>

        <div className="pic-item2">
          <div className="image-item">
            <img
              src={bougeoirs5}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs5)}
              loading="lazy"
            />

            <img
              src={bougeoirs6}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs6)}
              loading="lazy"
            />
            <p>Corian</p>
            <p>Diamètre 15 cm, hauteur 2,4 cm</p>
            <p>Price: 35€</p>
          </div>
        </div>
        <div className="items4">
          <h3>Suspension de Noël</h3>
        </div>
        <div className="pic-item2">
          <div className="image-item1">
            <img
              src={noel5}
              alt="noel"
              onClick={() => handleImageClick(noel5)}
              loading="lazy"
            />
            <p>
              Cadre-photo Grand Cerf <br />
              Contreplaqué <br />
              carton bois vernis
            </p>
            <p>Diamètre photo 9 cm</p>
            <p>prix : 10€</p>
          </div>
          <div className="image-item1">
            <img
              src={noel6}
              alt="noel"
              onClick={() => handleImageClick(noel6)}
              loading="lazy"
            />
            <p>
              Cadre-photo Petit Cerf <br />
              contreplaqué <br />
              carton bois vernis
            </p>
            <p>Dimension photo d'identité</p>
            <p>prix : 7€</p>
          </div>

          <div className="image-item1">
            <img
              src={noel7}
              alt="noel"
              onClick={() => handleImageClick(noel7)}
              loading="lazy"
            />
            <p>
              Cadre-photo pailletée <br />
              Contreplaqué, carton bois <br />
              pailletes vernis
            </p>
            <p>Diamètre photo 9 cm</p>
            <p>prix : 12€</p>
          </div>
          <div className="image-item1">
            <img
              src={noel8}
              alt="noel"
              onClick={() => handleImageClick(noel8)}
              loading="lazy"
            />
            <p>
              Flocon en corian <br />
              <br /> <br />
            </p>
            <p>Diamètre 11 cm</p>
            <p>prix : 12€</p>
          </div>
        </div>
        <div className="items6">
          <h3>Dessous de plat</h3>
        </div>
        <div className="pic-item2">
          <div className="image-item">
            <img
              src={plat}
              alt="plat"
              style={{ width: "250px" }}
              onClick={() => handleImageClick(plat)}
              loading="lazy"
            />

            <img
              src={plat2}
              alt="plat"
              style={{ width: "250px" }}
              onClick={() => handleImageClick(plat2)}
              loading="lazy"
            />
            <p>Chêne massif huilé</p>
            <p>Diamètre 24 cm</p>
            <p>Price: 35€</p>
          </div>
        </div>
        <div className="items5">
          <h3>Repose couteau</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={repose}
              alt="couteau"
              onClick={() => handleImageClick(repose)}
              loading="lazy"
            />

            <img
              src={repose4}
              alt="couteau"
              onClick={() => handleImageClick(repose4)}
              loading="lazy"
            />

            <img
              src={repose2}
              alt="couteau"
              onClick={() => handleImageClick(repose2)}
              loading="lazy"
            />

            <img
              src={repose3}
              alt="repose"
              onClick={() => handleImageClick(repose3)}
              loading="lazy"
            />
            <div className="reposetext">
              <p>Vieux chêne et Corian</p>
              <p>L 6 cm x l 1,6 cm </p>
              <p>prix : 4€ l'unité, avec aou sans stickers</p>
            </div>
          </div>
        </div>
        <div className="items8">
          <h3>Etapes de fabrication</h3>
        </div>
        <div className="pic-itemfab">
          <div className="image-itemfab">
            <img
              src={manupic}
              alt="artiste"
              onClick={() => handleImageClick(manupic)}
              loading="lazy"
            />
            <img
              src={cerffab}
              alt="cerffab"
              onClick={() => handleImageClick(cerffab)}
              loading="lazy"
            />
            <img
              src={noelfab}
              alt="noelfab"
              onClick={() => handleImageClick(noelfab)}
              loading="lazy"
            />

            <img
              src={floconfab}
              alt="floconfab"
              onClick={() => handleImageClick(floconfab)}
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
export default Chantournage;
