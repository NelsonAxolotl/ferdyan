import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chantournage.css";
import bougeoirs1 from "../Pics/Bougeoir1.jpg";
import bougeoirs2 from "../Pics/Bougeoir2.jpg";
import bougeoirs3 from "../Pics/Bougeoir3.jpg";
import bougeoirs4 from "../Pics/Bougeoir4.jpg";
import bougeoirs5 from "../Pics/bougeoir5.jpg";
import bougeoirs6 from "../Pics/bougeoir6.jpg";
import cerf1 from "../Pics/cerf1.jpg";
import cerf2 from "../Pics/cerf2.jpg";
import cerf3 from "../Pics/cerf3.jpg";
import cerf4 from "../Pics/cerf4.jpg";
import loup1 from "../Pics/loup1.jpg";
import loup2 from "../Pics/loup2.jpg";
import loup3 from "../Pics/loup3.jpg";
import loup4 from "../Pics/loup4.jpg";
import noel1 from "../Pics/noel1.jpg";
import noel2 from "../Pics/noel2.jpg";
import noel3 from "../Pics/noel3.jpg";
import noel4 from "../Pics/noel4.jpg";
import noel5 from "../Pics/noel5.jpg";
import noel6 from "../Pics/noel6.jpg";
import noel7 from "../Pics/noel7.png";
import noel8 from "../Pics/noel8.jpg";
import repose from "../Pics/repose.jpg";
import repose2 from "../Pics/repose2.jpg";
import repose3 from "../Pics/repose3.jpg";
import repose4 from "../Pics/repose4.jpg";
import plat from "../Pics/plat.jpg";
import plat2 from "../Pics/plat2.jpg";
import jpj from "../Pics/jpj.jpg";
import jpj2 from "../Pics/jpj2.jpg";
import jpj3 from "../Pics/jpj3.jpg";
import jpj4 from "../Pics/jpj4.jpg";
import loupfab from "../Pics/loupfab.jpg";
import cerffab from "../Pics/cerffab.jpg";
import noelfab from "../Pics/noelfab.jpg";
import floconfab from "../Pics/floconfab.jpg";
import taureau1 from "../Pics/Taureau.jpg";
import taureau from "../Pics/taureau2.jpg";
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
        <h1 className="slide-in">Chartournage</h1>
        <div className="underline-char"></div>
        <div className="propos">
          <p>
            Mon intérêt pour le chantournage a pris racine après avoir découvert
            un documentaire sur l&#39;histoire de{" "}
            <span>Joseph Paul Jernigan</span>, un prisonnier américain exécuté
            en 1993. Avant sa mort, il avait accepté de léguer son corps à la
            science. <br />
            Son cadavre a été congelé, puis découpé en 1 871 tranches de 1 mm
            d’épaisseur, de la tête aux pieds, dans le cadre du projet
            scientifique « Visible Human Project ». Cet événement a profondément
            modifié ma perception du corps humain et du volume.
          </p>
          <p>
            Fascinée par le rendu numérique des images, j’ai réalisé un dessin
            des contours de son visage, rappelant des cartes topographiques.{" "}
            <br />
            Le folioscope « Head 2 heads », qui présente des coupes
            transversales de la tête, m’a inspirée à reconstituer le haut du
            corps de Joseph Paul Jernigan en strates. Pour y parvenir, le seul
            outil me permettant d’effectuer des découpes précises, sinueuses et
            minutieuses est la scie à chantourner.
          </p>
        </div>
        <div className="items7">
          <h3>Travail sur </h3>
          <h4>joseph Paul Jernigan</h4>
        </div>
        <div className="pic-item">
          <img
            src={jpj}
            alt="jpj"
            onClick={() => handleImageClick(jpj)}
            loading="lazy"
          />

          <img
            src={jpj2}
            alt="jpj"
            onClick={() => handleImageClick(jpj2)}
            loading="lazy"
          />

          <img
            src={jpj3}
            alt="jpj"
            onClick={() => handleImageClick(jpj3)}
            loading="lazy"
          />

          <img
            src={jpj4}
            alt="jpj"
            onClick={() => handleImageClick(jpj4)}
            loading="lazy"
          />
        </div>
        <div className="propos">
          <p>
            Ma démarche artistique s’est développée pour devenir une exploration
            personnelle du règne animal. <br />
            En m’appuyant sur le même principe de strates mais sans pour autant
            reconstituer tout son volume, je conçois des têtes d’animaux aux
            lignes épurées.
          </p>
        </div>
        <div className="items8">
          <h3>Etapes de fabrication</h3>
        </div>
        <div className="pic-itemfab">
          <img
            src={loupfab}
            alt="loupfab"
            onClick={() => handleImageClick(loupfab)}
            loading="lazy"
          />

          <img
            src={cerffab}
            alt="cerffab"
            onClick={() => handleImageClick(cerffab)}
            loading="lazy"
          />
        </div>
        <div className="propos">
          <p>
            Le bois contreplaqué que je récupère dans différents chantiers,
            devient sous mes mains des matériaux vivants, transformés en
            sculptures murales qui incarnent la force et l’élégance. <br />A
            travers mes créations, telles que le cerf, le loup, le taureau...,
            je cherche à exprimer la puissance, la grâce et la beauté de la
            nature.
          </p>
        </div>
        <div className="propos1">
          <p>Chaque pièce présentée sur cette page</p>
          <span>est unique et disponible à la vente.</span>
          <div className={`accueil-container1 ${fadeIn ? "fade-in" : ""}`}>
            <span>
              Pour plus d&#39;informations, veuillez me
              <Link to="/contact">contacter</Link>.
            </span>
          </div>
        </div>
        <div className="gallerie">
          <h2>Gallerie</h2>
        </div>

        <div className="items2">
          <h3>Cerfs</h3>
        </div>
        <div className="items2cerf">
          <p>Contreplaqué marine,</p>
          <span>brou de noix et vernis acrylique</span>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={cerf2}
              alt="cerf"
              onClick={() => handleImageClick(cerf2)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={cerf1}
              alt="cerf"
              onClick={() => handleImageClick(cerf1)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={cerf4}
              alt="cerf"
              onClick={() => handleImageClick(cerf4)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={cerf3}
              alt="cerf"
              onClick={() => handleImageClick(cerf3)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="items3">
          <h3>Loups</h3>
          <p>Contreplaqué, brou de noix, peinture, vernis</p>
        </div>
        <div className="pic-item1">
          <div className="image-item">
            <img
              src={loup1}
              alt="loup"
              onClick={() => handleImageClick(loup1)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={loup2}
              alt="loup"
              onClick={() => handleImageClick(loup2)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={loup3}
              alt="loup"
              onClick={() => handleImageClick(loup3)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={loup4}
              alt="loup"
              onClick={() => handleImageClick(loup4)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="items7">
          <h3>Taureau</h3>
        </div>
        <div className="items2cerf">
          <p>Contreplaqué marine,</p>
          <span>brou de noix et vernis acrylique</span>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={taureau1}
              alt="taureau"
              onClick={() => handleImageClick(taureau1)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={taureau}
              alt="taureau"
              onClick={() => handleImageClick(taureau)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="propos">
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
        <div className="items8">
          <h3>Etapes de fabrication</h3>
        </div>
        <div className="pic-itemfab">
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
        <div className="propos1">
          <p>Chaque pièce présentée sur cette page</p>
          <span>est unique et disponible à la vente.</span>
          <div className={`accueil-container1 ${fadeIn ? "fade-in" : ""}`}>
            <span>
              Pour plus d&apos;informations, veuillez me contacter.
              <Link to="/contact">contacter</Link>.
            </span>
          </div>
        </div>
        <div className="gallerie">
          <h2>Gallerie</h2>
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
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={bougeoirs2}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs2)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={bougeoirs3}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs3)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={bougeoirs4}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs4)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
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
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
          <div className="image-item">
            <img
              src={bougeoirs6}
              alt="bougeoir"
              onClick={() => handleImageClick(bougeoirs6)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="items4">
          <h3>Suspension de Noël</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={noel1}
              alt="noel"
              onClick={() => handleImageClick(noel1)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={noel5}
              alt="noel"
              onClick={() => handleImageClick(noel5)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={noel6}
              alt="noel"
              onClick={() => handleImageClick(noel6)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="pic-item2">
          <div className="image-item">
            <img
              src={noel2}
              alt="noel"
              onClick={() => handleImageClick(noel2)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={noel7}
              alt="noel"
              onClick={() => handleImageClick(noel7)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="pic-item3">
          <div className="image-item">
            <img
              src={noel4}
              alt="noel"
              onClick={() => handleImageClick(noel4)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={noel3}
              alt="noel"
              onClick={() => handleImageClick(noel3)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={noel8}
              alt="noel"
              onClick={() => handleImageClick(noel8)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
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
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={repose4}
              alt="couteau"
              onClick={() => handleImageClick(repose4)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={repose2}
              alt="couteau"
              onClick={() => handleImageClick(repose2)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={repose3}
              alt="repose"
              onClick={() => handleImageClick(repose3)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>
        </div>
        <div className="items6">
          <h3>Dessous de plat</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            <img
              src={plat}
              alt="plat"
              style={{ width: "250px" }}
              onClick={() => handleImageClick(plat)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
          </div>

          <div className="image-item">
            <img
              src={plat2}
              alt="plat"
              style={{ width: "250px" }}
              onClick={() => handleImageClick(plat2)}
              loading="lazy"
            />
            <p>Dimensions: cm x cm</p>
            <p>Price: €</p>
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
export default Chantournage;
