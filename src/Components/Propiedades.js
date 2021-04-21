import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import PropiedadesCard from "./PropiedadesCard";
import PropiedadesPaginate from "./PropiedadesPaginate";
import { IoOptionsOutline } from "react-icons/io5";
import styled from "@emotion/styled";

function Propiedades() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000000);
  const [typeFilter, setTypeFilter] = useState("Todo");
  const [OfferFilter, setOfferFilter] = useState("Todo");
  const [finalMinPrice, setFinalMinPrice] = useState(0);
  const [finalMaxPrice, setFinalMaxPrice] = useState(1000000000);
  const [finalTypeFilter, setFinalTypeFilter] = useState("Todo");
  const [finalOfferFilter, setFinalOfferFilter] = useState("Todo");

  useEffect(() => {
    const rootRef = firebase.database().ref().child("Global");
    const populationRef = rootRef.child("population");
    populationRef.on("value", (snapshot) => {
      setLoading(true);
      const value = [];
      const obj = snapshot.val();
      for (let id in obj) {
        if (finalMaxPrice === "") {
          setFinalMaxPrice(100000000000000000);
        } else if (finalMinPrice === "") {
          setFinalMinPrice(0);
        }
        if (finalTypeFilter === "Todo" && finalOfferFilter === "Todo") {
          if (
            obj[id]["PrecioDeLaPropiedad"] >= finalMinPrice &&
            obj[id]["PrecioDeLaPropiedad"] <= finalMaxPrice
          ) {
            value.push({
              tipoDePropiedad: obj[id]["tipoDePropiedad"],
              image:
                "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
              PrecioDeLaPropiedad: obj[id]["PrecioDeLaPropiedad"],
              ubicacionDeLaPropiedad: obj[id]["ubicacionDeLaPropiedad"],
              alt: "batman",
              tipoDeOferta: obj[id]["tipoDeOferta"],
              path: `/propiedad`,
              TotalDeBaños: obj[id]["TotalDeBaños"],
              cajonesDeEstacionamiento: obj[id]["cajonesDeEstacionamiento"],
              bañosCompletos: obj[id]["bañosCompletos"],
              recamaras: obj[id]["recamaras"],
              ID: obj[id]["ID"],
              description: obj[id]["description"],
              files: obj[id]["files"],
              m2: obj[id]["m2"],
              mainfile: obj[id]["mainfile"],
            });
          }
        } else if (finalTypeFilter === "Todo") {
          if (
            obj[id]["PrecioDeLaPropiedad"] >= finalMinPrice &&
            obj[id]["PrecioDeLaPropiedad"] <= finalMaxPrice &&
            obj[id]["tipoDeOferta"] === finalOfferFilter
          ) {
            value.push({
              tipoDePropiedad: obj[id]["tipoDePropiedad"],
              image:
                "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
              PrecioDeLaPropiedad: obj[id]["PrecioDeLaPropiedad"],
              ubicacionDeLaPropiedad: obj[id]["ubicacionDeLaPropiedad"],
              alt: "batman",
              tipoDeOferta: obj[id]["tipoDeOferta"],
              path: `/propiedad`,
              TotalDeBaños: obj[id]["TotalDeBaños"],
              cajonesDeEstacionamiento: obj[id]["cajonesDeEstacionamiento"],
              bañosCompletos: obj[id]["bañosCompletos"],
              recamaras: obj[id]["recamaras"],
              ID: obj[id]["ID"],
              description: obj[id]["description"],
              files: obj[id]["files"],
              m2: obj[id]["m2"],
              mainfile: obj[id]["mainfile"],
            });
          }
        } else if (finalOfferFilter === "Todo") {
          if (
            obj[id]["PrecioDeLaPropiedad"] >= finalMinPrice &&
            obj[id]["PrecioDeLaPropiedad"] <= finalMaxPrice &&
            obj[id]["tipoDePropiedad"] === finalTypeFilter
          ) {
            value.push({
              tipoDePropiedad: obj[id]["tipoDePropiedad"],
              image:
                "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
              PrecioDeLaPropiedad: obj[id]["PrecioDeLaPropiedad"],
              ubicacionDeLaPropiedad: obj[id]["ubicacionDeLaPropiedad"],
              alt: "batman",
              tipoDeOferta: obj[id]["tipoDeOferta"],
              path: `/propiedad`,
              TotalDeBaños: obj[id]["TotalDeBaños"],
              cajonesDeEstacionamiento: obj[id]["cajonesDeEstacionamiento"],
              bañosCompletos: obj[id]["bañosCompletos"],
              recamaras: obj[id]["recamaras"],
              ID: obj[id]["ID"],
              description: obj[id]["description"],
              files: obj[id]["files"],
              m2: obj[id]["m2"],
              mainfile: obj[id]["mainfile"],
            });
          }
        } else {
          if (
            obj[id]["PrecioDeLaPropiedad"] >= finalMinPrice &&
            obj[id]["PrecioDeLaPropiedad"] <= finalMaxPrice &&
            obj[id]["tipoDePropiedad"] === finalTypeFilter &&
            obj[id]["tipoDeOferta"] === finalOfferFilter
          ) {
            value.push({
              tipoDePropiedad: obj[id]["tipoDePropiedad"],
              image:
                "https://d15jm47acbjce0.cloudfront.net/s838x629_1460146289338.JPG",
              PrecioDeLaPropiedad: obj[id]["PrecioDeLaPropiedad"],
              ubicacionDeLaPropiedad: obj[id]["ubicacionDeLaPropiedad"],
              alt: "batman",
              tipoDeOferta: obj[id]["tipoDeOferta"],
              path: `/propiedad`,
              TotalDeBaños: obj[id]["TotalDeBaños"],
              cajonesDeEstacionamiento: obj[id]["cajonesDeEstacionamiento"],
              bañosCompletos: obj[id]["bañosCompletos"],
              recamaras: obj[id]["recamaras"],
              ID: obj[id]["ID"],
              description: obj[id]["description"],
              files: obj[id]["files"],
              m2: obj[id]["m2"],
              mainfile: obj[id]["mainfile"],
            });
          }
        }
      }

      setData(value);
      setLoading(false);
      console.log(value);
    });
  }, [finalMaxPrice, finalMinPrice, finalTypeFilter, finalOfferFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalMaxPrice(maxPrice);
    setFinalMinPrice(minPrice);
    setFinalTypeFilter(typeFilter);
    setFinalOfferFilter(OfferFilter);
    setDisplayFilter(false);
  };

  const handleToggle = () => {
    setDisplayFilter(!displayFilter);
    setMaxPrice(100000000000);
    setMinPrice(0);
    setTypeFilter("Todo");
    setOfferFilter("Todo");
  };

  const renderAuthButton = () => {
    if (displayFilter) {
      return (
        <form
          action=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            position: "absolute",
            zIndex: 1,
            background: "white",
            width: "350px",
            border: "3px solid #060B26",
            right: "3%",
            top: "20%",
            paddingTop: "10px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              margin: "0 auto",
              marginBottom: "19px",
              marginTop: "5px",
            }}
          >
            Filtrar propiedades
          </h3>
          <lablel
            style={{
              width: "230px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
          >
            Precio Minimo
          </lablel>
          <input
            style={{
              padding: "6px",
              width: "230px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
            type="number"
            name="minPrice"
            required
            placeholder="type a number"
            onChange={(e) => {
              setMinPrice(e.target.value);
            }}
          />
          <lablel
            style={{
              width: "20%",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
          >
            Precio Maximo
          </lablel>
          <input
            style={{
              padding: "6px",
              width: "230px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
            type="number"
            name="maxPrice"
            required
            placeholder="type a number"
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
          />
          <lablel
            style={{
              width: "20%",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
          >
            Tipo de propiedad
          </lablel>
          <select
            name="select"
            id="select"
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{
              padding: "6px",
              width: "230px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
          >
            <option value="Todo">Cualquiera</option>
            <option value="Departamento">Departamentos</option>
            <option value="Casa">Casas</option>
            <option value="Terreno">Terrenos</option>
            <option value="Comercial">Comercial</option>
          </select>
          <lablel
            style={{
              width: "20%",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "10px",
            }}
          >
            Tipo de Oferta
          </lablel>
          <select
            name="select"
            id="select2"
            onChange={(e) => setOfferFilter(e.target.value)}
            style={{
              padding: "6px",
              width: "230px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "20px",
            }}
          >
            <option value="Todo">Cualquiera</option>
            <option value="Venta">Venta</option>
            <option value="Renta">Renta</option>
          </select>
          <Butt
            style={{
              padding: "6px",
              width: "230px",
              marginLeft: "60px",
              marginRight: "60px",
              marginBottom: "20px",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Filtrar
          </Butt>
        </form>
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <Header>PROPIEDADES</Header>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Filter>
          <IoOptionsOutline
            style={{ width: "100%", fontSize: "60px" }}
            onClick={() => {
              handleToggle();
            }}
          />
        </Filter>
        <div
          style={{
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          {renderAuthButton()}
        </div>
        <PropiedadesPaginate
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
      <PropiedadesCard data={currentPosts} loading={loading} />
    </div>
  );
}

const Butt = styled.button`
  border: 1px solid #060b26;
  border-radius: 10px;
  background: none;
  padding: 8px 8px;
  font-family: monospace;
  cursor: pointer;
  color: #060b26;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
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

const Filter = styled.h2`
  font-size: 40px;
  position: absolute;
  top: 11%;
  right: 6%;
  cursor: pointer;
  @media (max-width: 900px) {
    right: 8%;
    top: 8%;
  }
  @media (max-width: 350px) {
    right: 8%;
    top: 8%;
  }
`;

const Header = styled.h1`
  margin-top: 80px;
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  font-family: "Lato";
  @media (max-width: 900px) {
    margin-top: 105px;
  }
  @media (max-width: 350px) {
    margin-top: 105px;
  }
`;

export default Propiedades;
