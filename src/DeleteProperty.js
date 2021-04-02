import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

function DeleteProperty() {
  const [id, setId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    deleteProperty();
  };

  const deleteProperty = () => {
    const rootRef = firebase.database().ref().child("Global");
    const populationRef = rootRef.child("population");
    populationRef
      .orderByChild("ID")
      .equalTo(id)
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((child) => {
          child.ref.remove();
        });
      });
    Swal.fire("Felicidades!", "Eliminaste una propiedad!", "success");
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h1
        style={{
          marginTop: "80px",
          textAlign: "center",
          marginBottom: "30px",
          width: "100%",
          fontFamily: "Lato",
        }}
      >
        Eliminar Propiedad
      </h1>
      <h4
        style={{
          marginTop: "0px",
          textAlign: "center",
          marginBottom: "50px",
          width: "100%",
          fontFamily: "Lato",
        }}
      >
        Ingresa el ID de la propiedad que deseas eliminar
      </h4>
      <Input
        className="deleteinput"
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Butt
        className="deletebutton"
        onClick={() => {
          handleClick();
        }}
      >
        Eliminar
      </Butt>
    </div>
  );
}

const Input = styled.input`
  text-align: "center";
  margin-bottom: 40px;
  width: 20%;
  margin-left: 40%;
  margin-right: 35%;
  font-family: "Lato";
  height: 30px;
  @media screen and (max-width: 992px) {
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
    margin-top: -20px;
  }
`;

const Butt = styled.button`
  border: 1px solid #f53b57;
  border-radius: 10px;
  background: none;
  padding: 8px 8px;
  font-family: monospace;
  cursor: pointer;
  color: #f53b57;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  font-family: Lato;
  width: 10%;
  margin-left: 45%;
  margin-right: 45%;
  &:hover {
    color: white;
    background: #f53b57;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #f53b57;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }
  @media screen and (max-width: 992px) {
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
  }
`;

export default DeleteProperty;
