import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chantournage.css";
import bougeoirs1 from "../Pics/Bougeoir1.webp";
import bougeoirs2 from "../Pics/Bougeoir2.webp";
import bougeoirs3 from "../Pics/bougeoir3.webp";
import bougeoirs4 from "../Pics/bougeoir4.webp";
import bougeoirs5 from "../Pics/bougeoir5.webp";
import bougeoirs6 from "../Pics/bougeoir6.webp";
import cerf2 from "../Pics/cerf1.webp";
import cerf1 from "../Pics/cerf2.webp";
import cerf4 from "../Pics/Cerf3.webp";
import cerf3 from "../Pics/cerf4.webp";
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
import taureau1 from "../Pics/Taureau.webp";
import taureau from "../Pics/taureau2.webp";
import lion from "../Vidéos/lion.mp4";
import lion2 from "../Vidéos/lion2.mp4";
import taureau3 from "../Pics/taureau3.jpg";
import taureau4 from "../Pics/taureau4.jpg";
import lion3 from "../Pics/lion3.jpg";

const Chantournage = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };
  const images = [cerf1, cerf2];
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
  const images2 = [cerf3, cerf4];
  const [enlargedImage2, setEnlargedImage2] = useState(null);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const updateEnlargedImage2 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images2.length) {
      setCurrentIndex2(index);
      setEnlargedImage2(images2[index]);
    }
  };

  // Gestion des clics
  const handleImageClick2 = (index) => updateEnlargedImage2(index);

  // Ferme l'image agrandie
  const handleCloseImage2 = () => setEnlargedImage2(null);

  // Navigue vers l'image suivante
  const handleNextImage2 = () => {
    const nextIndex = (currentIndex2 + 1) % images2.length;
    updateEnlargedImage2(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage2 = () => {
    const prevIndex = (currentIndex2 - 1 + images2.length) % images2.length;
    updateEnlargedImage2(prevIndex);
  };

  const images3 = [loup1, loup2];
  const [enlargedImage3, setEnlargedImage3] = useState(null);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const updateEnlargedImage3 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images3.length) {
      setCurrentIndex3(index);
      setEnlargedImage3(images3[index]);
    }
  };

  // Gestion des clics
  const handleImageClick3 = (index) => updateEnlargedImage3(index);

  // Ferme l'image agrandie
  const handleCloseImage3 = () => setEnlargedImage3(null);

  // Navigue vers l'image suivante
  const handleNextImage3 = () => {
    const nextIndex = (currentIndex3 + 1) % images3.length;
    updateEnlargedImage3(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage3 = () => {
    const prevIndex = (currentIndex3 - 1 + images3.length) % images3.length;
    updateEnlargedImage3(prevIndex);
  };

  const images4 = [loup3, loup4];
  const [enlargedImage4, setEnlargedImage4] = useState(null);
  const [currentIndex4, setCurrentIndex4] = useState(0);

  const updateEnlargedImage4 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images4.length) {
      setCurrentIndex4(index);
      setEnlargedImage4(images4[index]);
    }
  };

  // Gestion des clics
  const handleImageClick4 = (index) => updateEnlargedImage4(index);

  // Ferme l'image agrandie
  const handleCloseImage4 = () => setEnlargedImage4(null);

  // Navigue vers l'image suivante
  const handleNextImage4 = () => {
    const nextIndex = (currentIndex4 + 1) % images4.length;
    updateEnlargedImage4(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage4 = () => {
    const prevIndex = (currentIndex4 - 1 + images4.length) % images4.length;
    updateEnlargedImage4(prevIndex);
  };

  const images5 = [taureau1, taureau];
  const [enlargedImage5, setEnlargedImage5] = useState(null);
  const [currentIndex5, setCurrentIndex5] = useState(0);

  const updateEnlargedImage5 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images5.length) {
      setCurrentIndex5(index);
      setEnlargedImage5(images5[index]);
    }
  };

  // Gestion des clics
  const handleImageClick5 = (index) => updateEnlargedImage5(index);

  // Ferme l'image agrandie
  const handleCloseImage5 = () => setEnlargedImage5(null);

  // Navigue vers l'image suivante
  const handleNextImage5 = () => {
    const nextIndex = (currentIndex5 + 1) % images5.length;
    updateEnlargedImage5(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage5 = () => {
    const prevIndex = (currentIndex5 - 1 + images5.length) % images5.length;
    updateEnlargedImage5(prevIndex);
  };

  const images6 = [bougeoirs1, bougeoirs2];
  const [enlargedImage6, setEnlargedImage6] = useState(null);
  const [currentIndex6, setCurrentIndex6] = useState(0);

  const updateEnlargedImage6 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images6.length) {
      setCurrentIndex6(index);
      setEnlargedImage6(images6[index]);
    }
  };

  // Gestion des clics
  const handleImageClick6 = (index) => updateEnlargedImage6(index);

  // Ferme l'image agrandie
  const handleCloseImage6 = () => setEnlargedImage6(null);

  // Navigue vers l'image suivante
  const handleNextImage6 = () => {
    const nextIndex = (currentIndex6 + 1) % images6.length;
    updateEnlargedImage6(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage6 = () => {
    const prevIndex = (currentIndex6 - 1 + images6.length) % images6.length;
    updateEnlargedImage6(prevIndex);
  };

  const images7 = [bougeoirs3, bougeoirs4];
  const [enlargedImage7, setEnlargedImage7] = useState(null);
  const [currentIndex7, setCurrentIndex7] = useState(0);

  const updateEnlargedImage7 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images7.length) {
      setCurrentIndex7(index);
      setEnlargedImage7(images7[index]);
    }
  };

  // Gestion des clics
  const handleImageClick7 = (index) => updateEnlargedImage7(index);

  // Ferme l'image agrandie
  const handleCloseImage7 = () => setEnlargedImage7(null);

  // Navigue vers l'image suivante
  const handleNextImage7 = () => {
    const nextIndex = (currentIndex7 + 1) % images7.length;
    updateEnlargedImage7(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage7 = () => {
    const prevIndex = (currentIndex7 - 1 + images7.length) % images7.length;
    updateEnlargedImage7(prevIndex);
  };

  const images8 = [bougeoirs5, bougeoirs6]; // Remplacez bougeoirs5 et bougeoirs6 par vos images
  const [enlargedImage8, setEnlargedImage8] = useState(null);
  const [currentIndex8, setCurrentIndex8] = useState(0);

  const updateEnlargedImage8 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images8.length) {
      setCurrentIndex8(index);
      setEnlargedImage8(images8[index]);
    }
  };

  // Gestion des clics
  const handleImageClick8 = (index) => updateEnlargedImage8(index);

  // Ferme l'image agrandie
  const handleCloseImage8 = () => setEnlargedImage8(null);

  // Navigue vers l'image suivante
  const handleNextImage8 = () => {
    const nextIndex = (currentIndex8 + 1) % images8.length;
    updateEnlargedImage8(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage8 = () => {
    const prevIndex = (currentIndex8 - 1 + images8.length) % images8.length;
    updateEnlargedImage8(prevIndex);
  };

  const images9 = [plat, plat2]; // Assurez-vous que plat et plat2 sont définis
  const [enlargedImage9, setEnlargedImage9] = useState(null);
  const [currentIndex9, setCurrentIndex9] = useState(0);

  const updateEnlargedImage9 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images9.length) {
      setCurrentIndex9(index);
      setEnlargedImage9(images9[index]);
    }
  };

  // Gestion des clics
  const handleImageClick9 = (index) => updateEnlargedImage9(index);

  // Ferme l'image agrandie
  const handleCloseImage9 = () => setEnlargedImage9(null);

  // Navigue vers l'image suivante
  const handleNextImage9 = () => {
    const nextIndex = (currentIndex9 + 1) % images9.length;
    updateEnlargedImage9(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage9 = () => {
    const prevIndex = (currentIndex9 - 1 + images9.length) % images9.length;
    updateEnlargedImage9(prevIndex);
  };

  const images10 = [taureau3, taureau4];
  const [enlargedImage10, setEnlargedImage10] = useState(null);
  const [currentIndex10, setCurrentIndex10] = useState(0);

  const updateEnlargedImage10 = (index) => {
    if (Number.isInteger(index) && index >= 0 && index < images10.length) {
      setCurrentIndex10(index);
      setEnlargedImage10(images10[index]);
    }
  };

  // Gestion des clics
  const handleImageClick10 = (index) => updateEnlargedImage10(index);

  // Ferme l'image agrandie
  const handleCloseImage10 = () => setEnlargedImage10(null);

  // Navigue vers l'image suivante
  const handleNextImage10 = () => {
    const nextIndex = (currentIndex10 + 1) % images10.length;
    updateEnlargedImage10(nextIndex);
  };

  // Navigue vers l'image précédente
  const handlePrevImage10 = () => {
    const prevIndex = (currentIndex10 - 1 + images10.length) % images10.length;
    updateEnlargedImage10(prevIndex);
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
            un documentaire sur le destin de{" "}
            <Link
              to="https://fr.wikipedia.org/wiki/Joseph_Paul_Jernigan"
              target="_blank"
            >
              <span>Joseph Paul Jernigan</span>
            </Link>
            , un condamné américain exécuté, tranché puis numérisé, dans le
            cadre du projet scientifique
            <Link
              to="https://fr.wikipedia.org/wiki/Visible_Human_Project"
              target="_blank"
            >
              <span>« Visible Human Project »</span>
            </Link>
            . <br />
            Cette nouvelle vue tridimensionnelle du corps humain m’a fascinée.
            <br />
            Le contour de ces coupes frontales m’ont permit de réaliser un
            dessin de son visage, telle une cartographie des courbes de niveau
            et de reconstituer son buste en volume. <br />
            Pour y parvenir, le seul outil me permettant d’effectuer des
            découpes précises, sinueuses et minutieuses était la scie à
            chantourner.
          </p>
        </div>
        <div className="pic-item2">
          <div className="image-item">
            <img
              src={jpj}
              alt="jpj"
              width="436px"
              height="633px"
              onClick={() => handleImageClick(jpj)}
              loading="lazy"
            />
          </div>
          <div className="image-item">
            <img
              src={jpj2}
              alt="jpj"
              width="480px"
              height="640px"
              onClick={() => handleImageClick(jpj2)}
              loading="lazy"
            />
          </div>
          <div className="image-item">
            <img
              src={jpj3}
              alt="jpj"
              width="480px"
              height="640px"
              onClick={() => handleImageClick(jpj3)}
              loading="lazy"
            />
          </div>
          <div className="image-item">
            <img
              src={jpj4}
              alt="jpj"
              width="640px"
              height="480px"
              onClick={() => handleImageClick(jpj4)}
              loading="lazy"
            />
          </div>
        </div>
        <div className="proposx">
          <p>
            Ma démarche artistique s’est développée pour devenir une exploration
            personnelle du règne animal. <br />
            En m’appuyant sur le même principe de coupes frontales mais sans
            pour autant reconstituer tout le relief, je conçois des têtes
            d’animaux aux lignes épurées.
          </p>
          <p>
            Le bois contreplaqué que je récupère dans différents chantiers,
            devient sous mes mains des matériaux vivants, transformés en
            sculptures murales qui incarnent la force et l’élégance. <br />A
            travers mes créations, telles que le cerf, le loup, le taureau, le
            lion..., je cherche à exprimer la puissance, la grâce et la beauté
            de la nature. <br />
            L’application de la teinte au brou de noix pour accentuer le relief
            est une touche finale très esthétique ajoutant à la fois de la
            chaleur et de la texture. <br />
            Le vernis en quatre couches quant à lui, assure une protection tout
            en rehaussant l’aspect visuel de mes sculptures murales.
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
        <div className="pic-item">
          <div className="image-item">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`cerf${index + 1}`}
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
            <div className="cerf-text">
              <p>Contreplaqué, brou de noix,</p> <p>vernis acrylique</p>
            </div>
            <p>Dimensions : L 46 x l 39 cm x p 4 cm</p>
            <p>Prix : 95€</p>
          </div>
          <div className="image-item">
            {images2.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`cerf${index + 3}`} // Adjustez pour les cerfs 3 et 4
                onClick={() => handleImageClick2(index)}
                loading="lazy"
              />
            ))}

            {enlargedImage2 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage2}>
                    ⬅
                  </button>
                  <img src={enlargedImage2} alt="Enlarged cerf" />
                  <button className="next-button" onClick={handleNextImage2}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage2}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <div className="cerf-text">
              <p>Contreplaqué, brou de noix,</p>
              <p> vernis acrylique</p>
            </div>
            <p>Dimensions: L51 x l 37,5 x p 5 cm</p>
            <p>Prix : 130€</p>
          </div>
        </div>
        <div className="items3">
          <h3>Le Loup</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            {images3.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`loup${index + 1}`}
                onClick={() => handleImageClick3(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage3 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage3}>
                    ⬅
                  </button>
                  <img src={enlargedImage3} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage3}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage3}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <p>Contreplaqué, brou de noix, peinture,</p> <p>vernis acrylique</p>
            <p>Dimensions : L 37 x l 24 x p 5 cm</p>
            <p>Prix : 140€</p>
          </div>
          <div className="image-item">
            {images4.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`loup${index + 3}`}
                onClick={() => handleImageClick4(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage4 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage4}>
                    ⬅
                  </button>
                  <img src={enlargedImage4} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage4}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage4}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <p>Contreplaqué, brou de noix, peinture noire, </p>
            <p>vernis acrylique</p>
            <p>Dimensions: L 37 x l 24 x p 5 cm</p>
            <p>Prix : 140€</p>
          </div>
        </div>
        <div className="items3">
          <h3>Le Taureau</h3>
        </div>
        <div className="pic-item">
          <div className="image-item">
            {images5.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`taueau${index + 1}`}
                onClick={() => handleImageClick5(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage5 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage5}>
                    ⬅
                  </button>
                  <img src={enlargedImage5} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage5}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage5}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <div className="cerf-text">
              <p>Contreplaqué, brou de noix,</p>
              <p> vernis acrylique</p>
            </div>
            <p>Dimensions : L 48 x l 58 x p 6 cm</p>
            <p>Prix : 250€</p>
          </div>
          <div className="image-item">
            {images10.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`taueau${index + 1}`}
                onClick={() => handleImageClick10(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage10 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage10}>
                    ⬅
                  </button>
                  <img src={enlargedImage10} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage10}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage10}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <div className="cerf-text">
              <p>Contreplaqué, brou de noix,</p>
              <p> vernis acrylique</p>
            </div>
            <p>Dimensions : L 40 x l 36 x p 6 cm</p>
            <p>Prix : 290€</p>
          </div>
        </div>
        <div className="items3">
          <h3>Le Lion</h3>
        </div>
        <div className="lion-grid">
          <div className="lion-content">
            <div className="videos">
              <video
                autoPlay
                muted
                loop
                className="background-video"
                onContextMenu={(e) => e.preventDefault()} // Désactive le clic droit
              >
                <source src={lion} type="video/mp4" />
                Votre navigateur ne prend pas en charge les vidéos.
              </video>
              <video
                autoPlay
                muted
                loop
                className="background-video"
                onContextMenu={(e) => e.preventDefault()} // Désactive le clic droit
              >
                <source src={lion2} type="video/mp4" />
                Votre navigateur ne prend pas en charge les vidéos.
              </video>
            </div>
            <div className="image-item20">
              <div className="cerf-text">
                <p>Contreplaqué, brou de noix,</p>
                <p>vernis acrylique</p>
              </div>
              <p>Dimensions : L 56 x l 42 x p 6,5 cm</p>
              <p>Prix : 360€</p>
            </div>
          </div>
          <div className="lion-image">
            <img
              src={lion3}
              alt="bibliothèque dessin"
              width="450px"
              height="600px"
              onClick={() => handleImageClick(lion3)}
              loading="lazy"
            />

            <div className="image-item20">
              <div className="cerf-text">
                <p>Contreplaqué, brou de noix,</p>
              </div>
              <p>vernis acrylique et œil en verre</p>
              <p>Dimensions : L 37 x l 28 x p 5 cm</p>
              <p>Prix : 250€</p>
            </div>
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
            {images6.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`bougeoir${index + 1}`}
                onClick={() => handleImageClick6(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage6 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage6}>
                    ⬅
                  </button>
                  <img src={enlargedImage6} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage6}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage6}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <p>Contreplaqué, vernis acrylique</p>
            <p>Diamètre 15 cm, hauteur 2 cm</p>
            <p>Prix : 25€</p>
          </div>

          <div className="image-item">
            {images7.map((img, index) => (
              <img
                key={index}
                src={img}
                width="450px"
                height="600px"
                alt={`bougeoir${index + 3}`}
                onClick={() => handleImageClick7(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage7 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage7}>
                    ⬅
                  </button>
                  <img src={enlargedImage7} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage7}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage7}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <p>Contreplaqué, vernis acrylique</p>
            <p>Diamètre 15 cm, hauteur 2 cm</p>
            <p>Prix : 35€</p>
          </div>
        </div>
        <div className="pic-item4">
          <div className="image-item">
            {images8.map((img, index) => (
              <img
                key={index}
                src={img}
                width="436px"
                height="633px"
                alt={`bougeoir${index + 1}`}
                onClick={() => handleImageClick8(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage8 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage8}>
                    ⬅
                  </button>
                  <img src={enlargedImage8} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage8}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage8}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <p>Corian</p>
            <p>Diamètre 15 cm, hauteur 2,4 cm</p>
            <p>Prix : 35€</p>
          </div>
        </div>
        <div className="items4">
          <h3>Suspensions de Noël</h3>
        </div>
        <div className="pic-item2">
          <div className="image-item1">
            <img
              src={noel5}
              alt="noel"
              width="436px"
              height="633px"
              onClick={() => handleImageClick(noel5)}
              loading="lazy"
            />
            <p>Cadre-photo Grand Cerf</p>
            <p>Contreplaqué </p>
            <p>carton bois vernis</p>
            <p>Diamètre photo 9 cm</p>
            <p>prix : 10€</p>
          </div>
          <div className="image-item1">
            <img
              src={noel6}
              alt="noel"
              width="436px"
              height="633px"
              onClick={() => handleImageClick(noel6)}
              loading="lazy"
            />
            <p>Cadre-photo Petit Cerf </p>
            <p>contreplaqué</p>
            <p>carton bois vernis</p>
            <p>Dimension photo d'identité</p>
            <p>prix : 7€</p>
          </div>

          <div className="image-item1">
            <img
              src={noel7}
              alt="noel"
              width="436px"
              height="633px"
              onClick={() => handleImageClick(noel7)}
              loading="lazy"
            />
            <p>Cadre-photo pailletée</p>
            <p>Contreplaqué, carton bois </p>
            <p>pailletes vernis</p>
            <p>Diamètre photo 9 cm</p>
            <p>prix : 12€</p>
          </div>
          <div className="image-item1">
            <img
              src={noel8}
              alt="noel"
              width="436px"
              height="633px"
              onClick={() => handleImageClick(noel8)}
              loading="lazy"
            />
            <p>Flocon en corian </p>
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>
            <span>
              <br />
            </span>

            <p>Diamètre 11 cm, ep 5 mm</p>
            <p>prix : 12€</p>
          </div>
        </div>
        <div className="proposx">
          <p>
            Les suspensions « Cerf » et « boules pailletées » peuvent accueillir
            des photos de moments inoubliables en famille ou entre amis et créer
            des souvenirs précieux. <br />
            Elles peuvent aussi devenir une tradition familiale en ajoutant
            chaque année de nouvelles photos. <br />
            Elles feront d’excellents cadeaux pour quelqu’un de spécial. Facile
            d’utilisation, il suffit de retirer le fond du cadre pour placer la
            photo d’identité. <br />
            Pour les plus grands formats, vous pouvez utiliser le fond comme
            gabarit et découper votre photo. <br />
            Se sont des produits faits main et artisanaux conçus avec des
            matériaux de qualité.
          </p>
        </div>
        <div className="items6">
          <h3>Dessous de plat</h3>
        </div>
        <div className="pic-item4">
          <div className="image-item">
            {images9.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`bougeoir${index + 1}`}
                width="436px"
                height="633px"
                onClick={() => handleImageClick9(index)}
                loading="lazy"
              />
            ))}
            {enlargedImage9 && (
              <div className="overlay">
                <div className="enlarged-image-container">
                  <button className="prev-button" onClick={handlePrevImage9}>
                    ⬅
                  </button>
                  <img src={enlargedImage9} alt="Enlarged loup" />
                  <button className="next-button" onClick={handleNextImage9}>
                    ➡
                  </button>
                  <button className="close-button" onClick={handleCloseImage9}>
                    ✖
                  </button>
                </div>
              </div>
            )}
            <p>Chêne massif huilé</p>
            <p>Diamètre 24 cm, ép. : 2 cm</p>
            <p>Prix : 35€</p>
          </div>
        </div>
        <div className="proposx">
          <p>
            Les formes du flocon de neige apporteront une touche originale et
            esthétique à votre table, tout en évoquant la saison hivernale.{" "}
            <br />
            La finition huilée est plus agréable au toucher et apporte au bois
            une belle patine dans le temps.
          </p>
        </div>
        <div className="items5">
          <h3>Repose-couteau</h3>
        </div>
        <div className="pic-itemfab">
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
              <p>prix : 4€ l'unité, avec ou sans stickers</p>
            </div>
          </div>
        </div>
        <div className="proposx">
          <p>
            L’assemblage du vieux chêne et du Corian combine à la fois des
            éléments naturels et modernes. <br />
            Facile d’entretien, il suffira de passer un coup d’éponge humide et
            d’essuyer avec un chiffon
          </p>
        </div>
        <div className="items9">
          <h3>Politique de livraison</h3>
        </div>
        <div className="propos1">
          <p>
            Pour tout achat, vous avez le choix entre une remise en main propre
            sur la presqu’île de Lyon ou un envoi en colis suivi (frais de port
            à votre charge). <br />
            L’emballage de chacune des créations provient de carton recyclé que
            je découpe sur mesure et renforce avec soins pour assurer une
            protection optimale.
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
export default Chantournage;
