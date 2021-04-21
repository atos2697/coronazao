import "./about2.css";
import React, { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import "./Contacto.css";

const Contacto = () => {
  const [mision, setMision] = useState(false);
  const [vision, setVision] = useState(false);
  const [valores, setValores] = useState(false);

  return (
    <div className="about-body2">
      <div className="about-section2">
        <div className="inner-container">
          <h1>Contactanos</h1>
          <p className="text">
            Agenda una cita con uno de nuestros asesores inmobiliarios para que
            te ayude a encontrar la propiedad de tus sueños{" "}
          </p>
          <div className="social-media">
            <div className="social-links-p">
              <a
                href="https://www.facebook.com/580462422107127/posts/1824685077684849/?d=n"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "25px" }}
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.instagram.com/p/CJLtb8kD5o_IBAo7Cl966_E-8OmwBecWMM-P6g0/?igshid=1tfw4nvhrhu7l"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "25px" }}
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://wa.me/529983857973"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "25px" }}
              >
                <AiOutlineWhatsApp />
              </a>
              <a
                href="mailto:moreno.erika@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "25px" }}
              >
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
