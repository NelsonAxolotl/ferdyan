import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="slide-in">Contact</h1>
        <div className="underline-contact"></div>
        <div className="resa">
          <div className="mail">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto: emmaferdyan@gmail.com"
              >
                emmaferdyan@gmail.com
              </a>
            </span>
          </div>
          <div className="phone">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
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
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="insta">
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;