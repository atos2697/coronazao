import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Propiedades from "./Components/Propiedades";
import NotFound from "./Components/NotFound";
import Navbar from "./Navbar";
import Propiedad from "./Components/Propiedad";
import Form from "./Components/Form/FormEngine";
import DeleteProperty from "./DeleteProperty";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import UpdateProfile from "./UpdateProfile";
import Contacto from "./Contacto";
import About from "./about";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Router>
          <AuthProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/propiedades" component={Propiedades} />
              <Route path="/propiedad" component={Propiedad} />
              <Route path="/form" component={Form} />
              <Route path="/delete" component={DeleteProperty} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/signup" component={SignUp} />
              <Route path="/contacto" component={Contacto} />
              <Route path="/about-us" component={About} />
              <Route component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
