import React, { useRef, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";
import styled from "@emotion/styled";

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const telRef = useRef();
  const emailRefLogin = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const passwordRefLogin = useRef();
  const { signup, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  /*const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');*/
  //const container = useRef(null)
  const [signupActive, setSignupActive] = useState(false);
  const classContainer = signupActive
    ? "right-panel-active container"
    : "container";

  const toggleForm = () => {
    setSignupActive(!signupActive);
  };

  /*function signupActive() {
    container.classList.add("right-panel-active")
  }

  function signinActive() {
    container.classList.remove("right-panel-active")
  }*/

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRefLogin.current.value, passwordRefLogin.current.value);
      history.push("/");
    } catch {
      setError("Error al iniciar sesión");
    }

    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Las contraseñas no coinciden");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Error al crear la cuenta");
    }

    setLoading(false);
  }

  return (
    <div className="signup-body">
      <div class="vw-100" style={{ "font-family": "'Montserrat', sans-serif" }}>
        <h2>Forma para crear una cuenta con nosotros</h2>
        <div
          class="container"
          id="container"
          /*ref={container}*/ /*className={signupActive ? "right-panel-active": null}*/ className={
            classContainer
          }
        >
          <div class="form-container sign-up-container">
            {
              error && signupActive && (
                <div class="alert">
                  <span
                    class="closebtn"
                    onclick="this.parentElement.style.display='none';"
                    style={{ fontSize: "12px" }}
                  >
                    &times;
                  </span>
                  <strong>Error!</strong> {error}
                </div>
              ) /*<Alert variant="danger">{error}</Alert>*/
            }
            <Form action="#" onSubmit={handleSubmit}>
              <h1 className="title-form">Crear una cuenta</h1>
              <span style={{ fontSize: "12px" }} className="mb-2 text-muted">
                Por favor, ingresa tus datos para crear una cuenta
              </span>
              <span style={{ fontSize: "12px" }}>Nombre completo</span>
              <input
                className="form-input"
                type="text"
                placeholder="Nombre"
                ref={nameRef}
                required
              />
              <span style={{ fontSize: "12px" }}>
                Dirección de correo electrónico
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Dirección de correo electrónico"
                ref={emailRef}
                required
              />
              <span style={{ fontSize: "12px" }}>
                Número de teléfono (Opcional)
              </span>
              <input
                className="form-input"
                type="tel"
                name="number"
                pattern="[0-9]{10}"
                placeholder="Número de teléfono (Opcional)"
                ref={telRef}
                required
              />
              <span style={{ fontSize: "12px" }}> Contraseña</span>
              <input
                className="form-input"
                type="password"
                placeholder="Contraseña"
                minLength="8"
                ref={passwordRef}
                required
              />
              <span style={{ fontSize: "12px" }}>
                Vuelve a escribir tu contraseña
              </span>
              <input
                className="form-input"
                type="password"
                placeholder="Vuelve a escribir tu contraseña"
                minLength="8"
                ref={passwordConfirmRef}
                required
              />
              <button class="button-prot" disabled={loading}>
                Registrar
              </button>
            </Form>
          </div>
          <div class="form-container sign-in-container">
            <Form action="#" onSubmit={handleLogin}>
              <h1 className="title-form">Inicia sesión</h1>

              <span className="mb-4 text-muted" style={{ fontSize: "12px" }}>
                Ingresa tu correo y contraseña para iniciar sesión
              </span>
              <span style={{ fontSize: "12px" }}>
                Dirección de correo electrónico
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Email"
                ref={emailRefLogin}
              />
              <span style={{ fontSize: "12px" }}>Contraseña</span>
              <input
                className="form-input"
                type="password"
                placeholder="Contraseña"
                ref={passwordRefLogin}
                required
              />
              <Link class="aref" to="/forgot-password">
                Olvidaste tu contraseña?
              </Link>
              <button class="button-prot">Iniciar sesión</button>
            </Form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1 className="title-form">Ya tienes una cuenta?</h1>
                <Par>Bienvenido! Haz click debajo para iniciar sesión</Par>
                <button
                  class="ghost button-prot"
                  id="signIn"
                  onClick={toggleForm} /*onClick={signinActive}*/
                >
                  Iniciar sesión
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1 className="title-form">
                  No tienes una cuenta con nosotros?
                </h1>
                <Par>
                  Haz click en el botón de abajo para ingresar tus datos y crear
                  una cuenta!
                </Par>
                <button
                  class="ghost button-prot"
                  id="signUp"
                  onClick={toggleForm} /*onClick={signupActive}*/
                >
                  Crear cuenta
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer></footer>
      </div>
    </div>
  );
}

const Par = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;
