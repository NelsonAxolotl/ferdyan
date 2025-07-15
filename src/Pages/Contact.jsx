import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`accueil-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="contact">
        <h1 className="slide-in">Contact</h1>
        <div className="underline-contact"></div>
        <div className="resa">
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:emmaferdyan@gmail.com"
              >
                emmaferdyan@gmail.com
              </a>
            </span>
          </div>
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>Emmanuelle Ferdyan: 06 12 94 81 14</span>
          </div>
          <div className="address">
            <p>51 rue des Tables Claudiennes, 69001 Lyon</p>
          </div>
        </div>

        <div className="reseaux">
          <h2>Réseaux</h2>
        </div>
        <div className="icons">
          <div className="facebook">
            <a
              href="https://www.facebook.com/share/6UYmdLdVgbVBgwvp/"
              aria-label="Emmanuelle Ferdyan"
              title="Suivez-moi sur Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="insta">
            <a
              href="https://www.instagram.com/emmanuelle_ferdyan/profilecard/?igsh=MXZiZ3dvM29zajVidQ=="
              aria-label="Emmanuelle ferdyan"
              title="Suivez-moi sur Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
