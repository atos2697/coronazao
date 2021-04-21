import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase from "./firebase";

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
  const user = firebase.database().ref("Global/users/" + currentUser.uid);

  let name = "";
  let newName = "";
  let email = "";
  let newEmail = "";
  let phone = "";
  let newPhone = "";
  let newPassword = "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (currentUser != null) {
    user.on("value", (snapshot) => {
      const data = snapshot.val();
      name = data["name"];
      email = data["email"];
      phone = data["phone"];
      console.log(data);
    });
    /*
    currentUser.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      //name = profile.displayName;
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      console.log("  Tel: " + profile.tel);
      //tel = profile.tel;
    });*/
  }

  function updateData(newName, newEmail, newPhone) {
    var userData = {
      name: newName,
      email: newEmail,
      phone: newPhone,
    };

    var updates = {};
    updates["/Global/users/" + currentUser.uid] = userData;

    return firebase.database().ref().update(updates);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Las contraseñas no coinciden");
    }

    const promises = [];
    setLoading(true);
    setError("");

    newName = nameRef.current.value;
    newEmail = emailRef.current.value;
    newPhone = telRef.current.value;
    newPassword = passwordRef.current.value;

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
    if (passwordRef.current.value !== "") {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        updateData(newName, newEmail, newPhone);
        history.push("/");
      })
      .catch(() => {
        setError("Error al actualizar la cuenta");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Outerdiv>
      <Card style={{ width: "30rem" }}>
        <BlueDiv>
          <H2>Actualizar Perfil</H2>
        </BlueDiv>

        <FlexContainer>
          <H4>Edita los datos que deseas modificar.</H4>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Container style={{ width: "100%" }} id="name">
              <Label>Nombre</Label>
              <Input
                type="text"
                ref={nameRef}
                required
                placeholder="Sin nombre"
                defaultValue={name}
              />
            </Container>
            <Container style={{ width: "100%" }} id="email">
              <Label>Dirección de correo electrónico</Label>
              <Input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Container>
            <Container style={{ width: "100%" }} id="tel">
              <Label>Número de teléfono</Label>
              <Input
                type="tel"
                pattern="[0-9]{10}"
                ref={telRef}
                placeholder="sin teléfono"
                defaultValue={phone}
              />
            </Container>
            <Container style={{ width: "100%" }} id="password">
              <Label>Contraseña</Label>
              <Input
                minLength="8"
                type="password"
                ref={passwordRef}
                placeholder="sin cambios"
              />
            </Container>
            <Container style={{ width: "100%" }} id="password-confirm">
              <Label>Confirmar contraseña</Label>
              <Input
                minLength="8"
                type="password"
                ref={passwordConfirmRef}
                placeholder="sin cambios"
              />
            </Container>
            <ButtonReact
              style={{ marginBottom: "10px" }}
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Actualizar perfil
            </ButtonReact>
          </Form>
        </FlexContainer>

        <FlexContainer style={{ marginBottom: "10px" }}>
          <LinkButton to="/">Cancelar</LinkButton>
        </FlexContainer>
      </Card>
    </Outerdiv>
  );
}

const Outerdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 3%;
  @media (max-width: 900px) {
    margin-top: 17%;
  }
`;

const ButtonReact = styled(Button)`
  text-decoration: none;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  color: black;
  margin-top: 20px;
  padding: 6px 10px 6px 10px;
  font-size: 20px;
  cursor: pointer;
  border-color: #2196f3;
  color: dodgerblue;
  :hover {
    background: #2196f3;
    color: white;
  }
`;

const Alert = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: white;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  color: black;
  padding: 6px 10px 6px 10px;
  margin-top: 15px;
  font-size: 20px;
  cursor: pointer;
  border-color: red;
  color: red;
  margin-bottom: 20px;
  :hover {
    background: red;
    color: white;
  }
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  font-family: Lato;
  color: white;
`;

const Label = styled.label`
  font-size: 14px;
  text-align: center;
  margin-bottom: 3px;
  width: 100%;
  font-family: Lato;
`;

const H4 = styled.h4`
  color: #6c757d;
  text-align: center;
  margin-bottom: 2px;
  width: 100%;
  font-family: Lato;
  font-size: 16px;
  margin-bottom: 12px;
`;

const Card = styled.div`
  max-width: 750px;
  min-width: 360px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 98%;
  border-radius: 5px;
  height: 50%;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  padding: 2px 16px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

const Form = styled.form``;

const BlueDiv = styled.div`
  background-color: #2196f3;
  padding: 10px;
  height: 60px;
  border-radius: 8px 8px 0px 0px;
  margin-bottom: 8px;
`;

const Container = styled.div`
  padding: 2px 16px;
  width: 100%;
  text-align: start;
  height: 100px;
`;

const Input = styled.input`
  background-color: none;
  border-radius: 4px;
  border: solid 1px lightblue;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 20px;
`;
