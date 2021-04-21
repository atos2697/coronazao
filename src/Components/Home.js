import React from "react";
import HomeSlider from "./HomeSlider";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import "./Home.css";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          marginTop: "100px",
          textAlign: "center",
          marginBottom: "30px",
          width: "100%",
          fontFamily: "Lato",
        }}
      >
        PROMOBILIA
      </h1>
      <h3
        style={{
          fontFamily: "Lato",
          marginBottom: "35px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        La mejor inmobiliaria de Cancún
      </h3>

      <HomeSlider />
      <Link to="/propiedades">
        <Butt>Ver propiedades</Butt>
      </Link>
      <div style={{ marginTop: "15%" }} className="social-media3">
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
  );
};

const Butt = styled.button`
  border: 1px solid #060b26;
  border-radius: 15px;
  background: none;
  padding: 8px 8px;
  font-family: monospace;
  cursor: pointer;
  color: #060b26;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  font-family: Lato;
  &:hover {
    color: white;
    background: #060b26;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #060b26;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }
`;

export default Home;
