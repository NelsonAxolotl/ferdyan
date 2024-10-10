import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Nav from "./Components/Nav";
import End from "./Components/End";
import Intro from "./Components/Intro";
import Accueil from "./Pages/Accueil";
import Chantourage from "./Pages/Chantourage";
import Dessin from "./Pages/Dessin";
import Creation from "./Pages/Creation";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

function App() {
  const [showIntro, setShowIntro] = useState(true); // État pour afficher l'introduction

  const handleIntroComplete = () => {
    setShowIntro(false); // Masquer l'introduction une fois terminée
  };

  useEffect(() => {
    // Vérifiez la route actuelle pour réinitialiser l'introduction si nécessaire
    const handleNavigation = () => {
      if (window.location.pathname !== "/") {
        setShowIntro(false); // Ne pas montrer l'intro si on n'est pas sur la route d'accueil
      }
    };

    window.addEventListener("popstate", handleNavigation);
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return (
    <Router>
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <div className="app-content">
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/creation-sur-mesure" element={<Creation />} />
            <Route path="/chantourage" element={<Chantourage />} />
            <Route path="/dessins" element={<Dessin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <End />
        </div>
      )}
    </Router>
  );
}

export default App;
