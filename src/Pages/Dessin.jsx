import Gallery from "../Components/Gallery";
import "./Dessin.css";
const dessin = () => {
  return (
    <>
      <div className="dess">
        <h1 className="slide-in">Dessins</h1>
        <div className="underline-dess"></div>
        <div className="galleries2">
          <h2>Galerie</h2>
        </div>
        <Gallery />
      </div>
    </>
  );
};
export default dessin;
