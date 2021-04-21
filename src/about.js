import "./about.css";
import React, { useState } from "react";
import Popup from "./popup";

const About = () => {
  const [mision, setMision] = useState(false);
  const [vision, setVision] = useState(false);
  const [valores, setValores] = useState(false);

  return (
    <div className="about-body">
      <div className="about-section">
        <div className="inner-container">
          <h1>Quienes somos</h1>
          <p className="text">
            Ofrecemos atención personalizada en tus necesidades de servicios
            inmobiliarios. Compra, Venta, Renta de bienes Inmuebles asesorándote
            en todo momento para que encuentres la mejor opción.{" "}
          </p>
          <div className="skills">
            <span style={{ cursor: "pointer" }} onClick={() => setMision(true)}>
              Misión
            </span>
            <Popup trigger={mision} setTrigger={setMision}>
              <h3>Misión</h3>
              <br />
              <p>
                Ofrecer Servicios Inmobiliarios donde la honestidad y calidad en
                el servicio sean nuestro distintivo. Encontrar el bien inmueble
                en buen estado, a un precio de mercado correcto y que satisfagan
                las necesidades y expectativas que estás buscando. Un servicio
                de calidad integral de principio a fin.{" "}
              </p>
            </Popup>
            <span style={{ cursor: "pointer" }} onClick={() => setVision(true)}>
              Visión
            </span>
            <Popup trigger={vision} setTrigger={setVision}>
              <h3>Visión</h3>
              <br />
              <p>
                Ser una empresa que se distinga por la Calidad en el Servicio al
                Cliente con asesoría integral en Cancún y la Riviera Maya.{" "}
              </p>
            </Popup>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setValores(true)}
            >
              Valores
            </span>
            <Popup trigger={valores} setTrigger={setValores}>
              <h3>Valores</h3>
              <br />
              <ul>
                <li>Honestidad</li>
                <li>Innovación</li>
                <li>Respeto</li>
                <li>Espíritu de servicio </li>
                <li>Responsabilidad social</li>
              </ul>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
