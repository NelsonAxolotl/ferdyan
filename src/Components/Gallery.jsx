import { useState, useEffect, useCallback } from "react";
import "./Gallery.css"; // Fichier CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Carrousel

// Importation des images
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
import draw from "../Pics/1.webp";
import draw2 from "../Pics/5.webp";
import draw3 from "../Pics/6.webp";
import draw4 from "../Pics/10.webp";
import draw5 from "../Pics/11.webp";

// Tableau des images
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
  { src: draw, alt: "Dessin 1" },
  { src: draw2, alt: "Dessin 2" },
  { src: draw3, alt: "Dessin 3" },
  { src: draw4, alt: "Dessin 4" },
  { src: draw5, alt: "Dessin 5" },
];

const Gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Gestion du clic pour agrandir une image
  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  // Fermeture de l'image agrandie
  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  // Fermeture via la touche 'Échap'
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setEnlargedImage(null);
    }
  }, []);

  useEffect(() => {
    if (enlargedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [enlargedImage, handleKeyDown]);

  // Paramètres de `react-slick`
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1140,
        settings: { dots: false },
      },
    ],
  };

  return (
    <div className="gallery-container1">
      {/* Carrousel d'images */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-image-wrapper">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image1"
              width="300"
              height="500"
              loading="lazy"
              onClick={() => handleImageClick(image.src)}
              role="button"
              aria-label={`View ${image.alt}`}
            />
          </div>
        ))}
      </Slider>

      {/* Image agrandie */}
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
  );
};

export default Gallery;
