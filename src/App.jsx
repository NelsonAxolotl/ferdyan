import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Nav from "./Components/Nav";
import End from "./Components/End";
import Intro from "./Components/Intro";

// Lazy loading des pages
const Home = lazy(() => import("./Pages/Home"));
const Accueil = lazy(() => import("./Pages/Accueil"));
const Chantournage = lazy(() => import("./Pages/Chantournage"));
const Dessin = lazy(() => import("./Pages/Dessin"));
const Creation = lazy(() => import("./Pages/Creation"));
const Fixe = lazy(() => import("./Pages/Fixe"));
const Contact = lazy(() => import("./Pages/Contact"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.pathname !== "/") {
        setShowIntro(false);
      }
    };

    window.addEventListener("popstate", handleNavigation);
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  useEffect(() => {
    const disableContextMenu = (event) => {
      if (event.target.tagName === "IMG") {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return showIntro ? (
    <Intro onComplete={handleIntroComplete} />
  ) : (
    <div className="app-content">
      <Nav />

      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creation-sur-mesure" element={<Creation />} />
          <Route path="/reparation" element={<Fixe />} />
          <Route path="/chantournage" element={<Chantournage />} />
          <Route path="/bio" element={<Accueil />} />
          <Route path="/dessins" element={<Dessin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <End />
    </div>
  );
}

export default App;
