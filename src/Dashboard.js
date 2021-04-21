import React, { useState, useEffect } from "react";
//import { Card, Button, Alert, Table } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase, { auth } from "./firebase";
//import 'bootstrap/dist/css/bootstrap.min.css';
export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const user = firebase.database().ref("Global/users/" + currentUser.uid);
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (currentUser != null) {
      user.on("value", (snapshot) => {
        const data = snapshot.val();
        setName(data["name"]);
        setEmail(data["email"]);
        setPhone(data["phone"]);
        console.log(data);
      });
    }
  }, [name, phone, email]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleLogut() {
    setError("");

    try {
      await logout();
      history.push("/signup");
      window.location.reload();
    } catch {
      setError("No se pudo cerrar la sesión");
    }
  }

  return (
    <Outerdiv>
      <FlexContainer>
        <Card>
          <BlueDiv>
            <H2>Perfil</H2>
          </BlueDiv>

          {error && <Alert>{error}</Alert>}

          <FlexContainer>
            <Table>
              <tr>
                <Tb>
                  <strong>Nombre:</strong>
                </Tb>
              </tr>
              <Td>{name} </Td>
              <tr>
                <Tb>
                  <strong>Email:</strong>
                </Tb>
              </tr>
              <Td>{email}</Td>
              <tr>
                <Tb>
                  <strong>Teléfono:</strong>
                </Tb>
              </tr>
              <Td>{phone}</Td>
            </Table>
          </FlexContainer>

          <Container>
            <LinkButton to="/update-profile" renderAs={Link}>
              Actualizar perfil
            </LinkButton>
          </Container>
          <Center>
            <ButtonText onClick={handleLogut}>Cerrar sesión</ButtonText>
          </Center>
        </Card>
      </FlexContainer>
    </Outerdiv>
  );
}

const Outerdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
  @media (max-width: 900px) {
    margin-top: 15%;
  }
`;

const H2 = styled.h3`
  color: white;
  text-align: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
  font-family: Lato;
  padding-top: 10px;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2px;
`;

const Card = styled.div`
  max-width: 750px;
  min-width: 360px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  height: 30%;
  @media (max-width: 900px) {
    min-width: 0px;
    width: 90%;
  }
`;

const Container = styled.div`
  padding: 2px 16px;
  width: 100%;
  text-align: center;
  height: 100px;
  margin-top: -10%;
`;

const Table = styled.table`
  width: 94%;
  margin: 50px;
`;

const Td = styled.td`
  font-size: 20px;
  text-align: center;
  padding: 25px 0px 25px 0px;
  @media (max-width: 900px) {
    font-size: 14px;
    width: 100%;
  }
`;

const Tb = styled.td`
  font-size: 20px;
  text-align: center;
  padding: 0px;
  @media (max-width: 900px) {
    font-size: 17px;
    width: 100%;
  }
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
  font-size: 20px;
  cursor: pointer;
  border-color: #2196f3;
  color: dodgerblue;
  :hover {
    background: #2196f3;
    color: white;
  }
  @media (max-width: 900px) {
    padding: 10px 15px 10px 15px;
  }
`;

const ButtonOutline = styled.button`
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border-color: #2196f3;
  color: dodgerblue;
  :hover {
    background: #2196f3;
    color: white;
  }
`;

const ButtonAnimated = styled.button`
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  :hover {
    background-color: #3e8e41;
  }
  :active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const ButtonText = styled.button`
  text-decoration: none;
  color: red;
  border: none;
  border-radius: 8px;
  background-color: inherit;
  padding: 0px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-top: -900px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  :hover {
    background: #eee;
  }
  font-size: 24px;
`;

const GrayDiv = styled.div`
  background-color: #ddd;
  padding: 10px;
  height: 100px;
  border-radius: 8px 8px 0px 0px;
`;

const BlueDiv = styled.div`
  background-color: #24a0ed;
  padding: 5px;
  height: 60px;
  border-radius: 8px 8px 0px 0px;
  margin-bottom: -7%;
`;
