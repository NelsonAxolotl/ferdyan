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
  const [introCompleted, setIntroCompleted] = useState(false);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (introCompleted) {
      setFadeClass("fade-in");
    }
  }, [introCompleted]);

  return (
    <Router>
      {introCompleted ? (
        <div className={`app-content ${fadeClass}`}>
          {/* Applique la classe d'animation */}
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/creation sur mesure" element={<Creation />} />
            <Route path="/chantourage" element={<Chantourage />} />
            <Route path="/dessins" element={<Dessin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <End />
        </div>
      ) : (
        <Intro onComplete={() => setIntroCompleted(true)} />
      )}
    </Router>
  );
}

export default App;
