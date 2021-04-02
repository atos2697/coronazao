import React, { useState } from "react";
import { Card, Button, Alert, Table } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  let name = "";

  if (currentUser != null) {
    currentUser.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      name = profile.displayName;
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }

  async function handleLogut() {
    setError("");

    try {
      await logout();
      history.push("/signup");
    } catch {
      setError("No se pudo cerrar la sesión");
    }
  }

  return (
    <>
      <Card style={{ width: "23rem" }}>
        <Card.Header as="h2">Perfil</Card.Header>
        <Card.Body>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Información del perfil
          </Card.Subtitle>
          <br />
          {error && <Alert variant="danger">{error}</Alert>}
          <Table hover responsive>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <strong>Nombre:</strong>
                </td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Email:</strong>
                </td>
                <td>{currentUser.email}</td>
              </tr>
              <tr>
                <td>
                  <strong>Teléfono:</strong>
                </td>
                <td>{currentUser.tel}</td>
              </tr>
            </tbody>
          </Table>

          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Actualizar perfil
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogut}>
          Cerrar sesión
        </Button>
      </div>
    </>
  );
}
