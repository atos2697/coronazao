import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const telRef = useRef();
  const {
    currentUser,
    updatePassword,
    updateEmail,
    updateTel,
    updateName,
  } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  let name = "";
  let tel = "";

  if (currentUser != null) {
    console.log(" tel: " + currentUser.tel);
    console.log(" email: " + currentUser.email);
    currentUser.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      name = profile.displayName;
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      console.log("  Tel: " + profile.tel);
      tel = profile.tel;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (nameRef.current.value !== currentUser.name) {
      promises.push(updateName(nameRef.current.value));
    }

    if (currentUser.tel === undefined) {
      promises.push(updateTel(telRef.current.value));
    }

    if (telRef.current.value !== currentUser.tel) {
      promises.push(updateTel(telRef.current.value));
    }

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card style={{ width: "30rem" }}>
        <Card.Header as="h2">Actualizar datos del usuario</Card.Header>
        <Card.Body>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Edita los recuadros de los datos que deseas modificar.
            <br />
            Solo escribe en el apartado de contraseña si deseas modificarla.
          </Card.Subtitle>
          <br />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group style={{ width: "100%" }} id="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                ref={nameRef}
                required
                placeholder="Sin nombre"
                defaultValue={name}
              />
            </Form.Group>
            <Form.Group style={{ width: "100%" }} id="email">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group style={{ width: "100%" }} id="tel">
              <Form.Label>Número de teléfono</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                ref={telRef}
                placeholder="sin teléfono"
                defaultValue={tel}
              />
            </Form.Group>
            <Form.Group style={{ width: "100%" }} id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                minLength="8"
                type="password"
                ref={passwordRef}
                placeholder="sin cambios"
              />
            </Form.Group>
            <Form.Group style={{ width: "100%" }} id="password-confirm">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                minLength="8"
                type="password"
                ref={passwordConfirmRef}
                placeholder="sin cambios"
              />
            </Form.Group>
            <div>
              <br />
            </div>
            <Button disabled={loading} className="w-100" type="submit">
              Actualizar perfil
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link className="btn btn-warning" to="/">
          Cancelar
        </Link>
      </div>
    </>
  );
}
