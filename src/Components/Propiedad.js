import React, { useState, useEffect } from "react";
import "./Carousel.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import NumberFormat from "react-number-format";

const Propiedad = (props) => {
  const [id, setId] = useState("");
  const [tipo, setTipo] = useState("");
  const [precio, setPrecio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [oferta, setOferta] = useState("");
  const [recamaras, setRecamaras] = useState("");
  const [totalBaños, setTotalBaños] = useState("");
  const [bañosCompletos, setBañosCompletos] = useState("");
  const [estacionamiento, setEstacionamiento] = useState("");
  const [description, setDescription] = useState("");
  const [imgArray, setImgArray] = useState([]);
  const [m2, setM2] = useState("");

  useEffect(() => {
    setId(props.location.state.id);
    setTipo(props.location.state.tipo);
    setPrecio(props.location.state.precio);
    setUbicacion(props.location.state.ubicacion);
    setOferta(props.location.state.oferta);
    setRecamaras(props.location.state.recamaras);
    setTotalBaños(props.location.state.totalBaños);
    setBañosCompletos(props.location.state.bañosCompletos);
    setEstacionamiento(props.location.state.estacionamiento);
    setDescription(props.location.state.description);
    setImgArray(props.location.state.files);
    setM2(props.location.state.m2);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(imgArray);

  const data = imgArray.map((obj) => {
    return { image: obj };
  });

  console.log(data);

  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(".img-showcase img:first-child")
      .clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -imgId * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  return (
    <div style={{ marginTop: "0px" }} className="bodyy">
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                {data.map((obj, index) => {
                  return (
                    <img src={obj.image} alt="Property" className="map-image" />
                  );
                })}
              </div>
            </div>
            <div className="img-select">
              {data.map((obj, index) => {
                return (
                  <div className="img-item">
                    <a href="#" data-id={index}>
                      <img
                        className="map-image"
                        style={{ maxHeight: "250px" }}
                        src={obj["image"]}
                        alt="i"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">
              {tipo} en {ubicacion}
            </h2>
            <a href="tel:+529983857973" className="product-link">
              Agenda una cita
            </a>

            <div className="product-price">
              <p className="new-price">
                {oferta}:{" "}
                <span>
                  {
                    <NumberFormat
                      value={precio}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  }
                </span>
              </p>
            </div>
            <div className="product-detail">
              <h2>Sobre esta propiedad: </h2>
              <p>{description}</p>

              <ul>
                <li>
                  Baños:{" "}
                  <span>
                    <strong>{totalBaños}</strong>
                  </span>
                </li>
                <li>
                  Baños Completos:{" "}
                  <span>
                    <strong>{bañosCompletos}</strong>
                  </span>
                </li>
                <li>
                  Cajones de estacionamiento:{" "}
                  <span>
                    <strong>{estacionamiento}</strong>
                  </span>
                </li>
                <li>
                  Recamaras:{" "}
                  <span>
                    <strong>{recamaras}</strong>
                  </span>
                </li>
                <li>
                  Metros cuadrados:{" "}
                  <span>
                    <strong>{m2}</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div className="social-links">
              <p>Contactanos: </p>
              <a
                href="https://www.facebook.com/580462422107127/posts/1824685077684849/?d=n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.instagram.com/p/CJLtb8kD5o_IBAo7Cl966_E-8OmwBecWMM-P6g0/?igshid=1tfw4nvhrhu7l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://wa.me/529983857973"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propiedad;
