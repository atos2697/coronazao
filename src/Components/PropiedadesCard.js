import Card from "./Card";
import { Link } from "react-router-dom";
import "./card.css";

const PropiedadesCard = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      className="card-container"
      style={{ display: "flex", flexWrap: "wrap", marginTop: "-30px" }}
    >
      {data.map((obj) => {
        return (
          <Link
            to={{
              pathname: obj.path,
              state: {
                id: obj.ID,
                tipo: obj.tipoDePropiedad,
                precio: obj.PrecioDeLaPropiedad,
                ubicacion: obj.ubicacionDeLaPropiedad,
                oferta: obj.tipoDeOferta,
                recamaras: obj.recamaras,
                totalBaños: obj.TotalDeBaños,
                bañosCompletos: obj.bañosCompletos,
                estacionamiento: obj.cajonesDeEstacionamiento,
                description: obj.description,
                files: obj.files,
                m2: obj.m2,
              },
            }}
          >
            <Card
              tipoDePropiedad={obj.tipoDePropiedad}
              images={obj.image}
              PrecioDeLaPropiedad={obj.PrecioDeLaPropiedad}
              ubicacionDeLaPropiedad={obj.ubicacionDeLaPropiedad}
              alt={obj.alt}
              tipoDeOferta={obj.tipoDeOferta}
              cajonesDeEstacionamiento={obj.cajonesDeEstacionamiento}
              TotalDeBaños={obj.TotalDeBaños}
              bañosCompletos={obj.bañosCompletos}
              recamaras={obj.recamaras}
              files={obj.files}
              mainfile={obj.mainfile}
            ></Card>
          </Link>
        );
      })}
    </div>
  );
};

export default PropiedadesCard;
