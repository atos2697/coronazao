import React from "react";
import { BiBed } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { GrRestroom } from "react-icons/gr";
import { GiShower } from "react-icons/gi";
import "./card.css";
import NumberFormat from "react-number-format";

export default function Card(props) {
  let newClassName = `color_bg ${props.alt}`;

  let {
    tipoDePropiedad,
    PrecioDeLaPropiedad,
    ubicacionDeLaPropiedad,
    tipoDeOferta,
    cajonesDeEstacionamiento,
    recamaras,
    TotalDeBaños,
    bañosCompletos,
    files,
    mainfile,
  } = props;

  let bg_img = `url("${props.mainfile[0]}")`;

  return (
    <div className="card">
      <div className="warpper">
        <div className={newClassName}></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="card_img" style={{ backgroundImage: bg_img }}></div>
        </div>
        <div className="heart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
          </svg>
        </div>
        <div className="cardInfo">
          <h1>{tipoDePropiedad}</h1>
          <p className="date_">{tipoDeOferta}</p>
          <div className="action">
            <div className="priceGroup">
              <p className="price old_price">
                {
                  <NumberFormat
                    value={PrecioDeLaPropiedad}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                }
              </p>
              <p className="price newPrice">{ubicacionDeLaPropiedad}</p>
            </div>
            <div>
              <h5 style={{ fontSize: "15px" }}>
                <span>
                  <BiBed style={{ fontSize: "15px" }} />
                </span>
                {"             "} {recamaras}
                <span>
                  <AiOutlineCar style={{ fontSize: "15px" }} />
                </span>{" "}
                {cajonesDeEstacionamiento}
              </h5>
              <h5 style={{ fontSize: "15px" }}>
                <span>
                  <GrRestroom style={{ fontSize: "15px" }} />
                </span>
                {TotalDeBaños}{" "}
                <span>
                  <GiShower style={{ fontSize: "15px" }} />
                </span>{" "}
                {bañosCompletos}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
