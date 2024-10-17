import { useState, useEffect, useCallback } from "react";
import "./Gallery.css"; // Ton fichier de styles CSS
import "slick-carousel/slick/slick.css"; // Importation des styles de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Thème slick-carousel
import Slider from "react-slick"; // Importation du composant Slider de react-slick

// Importation des images que tu as mentionnées
import insitu1 from "../Pics/insitu1.webp";
import insitu2 from "../Pics/insitu2.webp";
import insitu3 from "../Pics/insitu3.webp";
import insitu4 from "../Pics/insitu4.webp";
import insitu5 from "../Pics/insitu5.webp";
import insitu6 from "../Pics/insitu6.webp";
import odalisque from "../Pics/odalisque.webp";
import odalisque2 from "../Pics/odalisque2.webp";
import odalisque3 from "../Pics/odalisque3.png";
import odalisque4 from "../Pics/odalisque4.webp";
import odalisque5 from "../Pics/odalisque5.webp";
import odalisque6 from "../Pics/odalisque6.webp";
import main from "../Pics/main1.webp";
import main1 from "../Pics/main2.webp";
import fauteuil from "../Pics/fauteuil.webp";
import biblidraw from "../Pics/biblidraw.webp";
import draw from "../Pics/1.webp";
import draw2 from "../Pics/5.webp";
import draw3 from "../Pics/6.webp";
import draw4 from "../Pics/10.webp";
import draw5 from "../Pics/11.webp";

// Tableau des images à afficher dans le carrousel
const images = [
  { src: insitu1, alt: "In situ 1" },
  { src: insitu2, alt: "In situ 2" },
  { src: insitu3, alt: "In situ 3" },
  { src: insitu4, alt: "In situ 4" },
  { src: insitu5, alt: "In situ 5" },
  { src: insitu6, alt: "In situ 6" },
  { src: odalisque, alt: "Odalisque" },
  { src: odalisque2, alt: "Odalisque 2" },
  { src: odalisque3, alt: "Odalisque 3" },
  { src: odalisque4, alt: "Odalisque 4" },
  { src: odalisque5, alt: "Odalisque 5" },
  { src: odalisque6, alt: "Odalisque 6" },
  { src: main, alt: "Main 1" },
  { src: main1, alt: "Main 2" },
  { src: fauteuil, alt: "Fauteuil" },
  { src: biblidraw, alt: "Bibliothèque" },
  { src: draw, alt: "dessin" },
  { src: draw2, alt: "dessin" },
  { src: draw3, alt: "dessin" },
  { src: draw4, alt: "dessin" },
  { src: draw5, alt: "dessin" },
];

const Gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null); // État pour l'image agrandie

  // Gérer l'agrandissement de l'image lors du clic
  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  // Fermer l'image agrandie
  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  // Gérer la fermeture de l'image agrandie via la touche 'Échap'
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setEnlargedImage(null);
    }
  }, []);

  useEffect(() => {
    if (enlargedImage) {
      window.addEventListener("keydown", handleKeyDown); // Ajouter un écouteur pour la touche 'Échap'
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Nettoyage de l'écouteur quand l'image est fermée
    };
  }, [enlargedImage, handleKeyDown]);

  // Paramètres du carrousel react-slick
  const settings = {
    dots: true, // Affiche des points pour la navigation
    infinite: true, // Carrousel infini
    speed: 500, // Vitesse de défilement
    slidesToShow: 1, // Nombre d'images visibles à la fois
    slidesToScroll: 1, // Nombre d'images défilées à chaque clic
    autoplay: true, // Défilement automatique
    autoplaySpeed: 3000, // Vitesse du défilement automatique
    responsive: [
      {
        breakpoint: 1140, // Cacher les dots en dessous de 1140px
        settings: {
          dots: false, // Ne pas afficher les dots
        },
      },
    ],
  };

  return (
    <>
      <div className="gallery-container1">
        {/* Carrousel d'images */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width="auto"
                height="400px"
                className={`gallery-image1 ${image.className || ""}`}
                loading="lazy"
                onClick={() => handleImageClick(image.src)} // Agrandir l'image lors du clic
                role="button"
                aria-label={`View ${image.alt}`} // Accessibilité
              />
            </div>
          ))}
        </Slider>

        {/* Affichage de l'image agrandie */}
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
      </div>
    </>
  );
};

export default Gallery;
