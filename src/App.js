import React, { useState } from "react";
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
import Navbar2 from "./Navbar2";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import UpdateProfile from "./UpdateProfile";

function App() {
  const [auth, setAuth] = useState(true);

  const Nav = () => {
    if (auth === true) return <Navbar />;
    else if (auth === false) return <Navbar2 />;
  };

  return (
    <BrowserRouter>
      <div>
        <Router>
          <AuthProvider>
            <Nav />
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
              <Route component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
