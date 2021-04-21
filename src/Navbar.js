import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaInstagram } from "react-icons/fa";
import {
  AiOutlineCloseCircle,
  AiFillHome,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBuildingHouse, BiUserCircle } from "react-icons/bi";
import "./navbar.css";
import { IconContext } from "react-icons";
import firebase from "./firebase";
import { useAuth } from "./contexts/AuthContext";

//npm install react-router-dom

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  //const [data, setData] = useState([]);
  const [data, setData] = useState([
    {
      title: "Inicio",
      path: "/",
      icon: <AiFillHome />,
      className: "nav-text",
    },
    {
      title: "Propiedades",
      path: "/propiedades",
      icon: <BiBuildingHouse />,
      className: "nav-text",
    },

    {
      title: "Perfil",
      path: "/dashboard",
      icon: <BiUserCircle />,
      className: "nav-text",
    },
    {
      title: "Contactanos",
      path: "/contacto",
      icon: <AiOutlineContacts />,
      className: "nav-text",
    },
    {
      title: "Quienes somos",
      path: "/about-us",
      icon: <BiUserCircle />,
      className: "nav-text",
    },
  ]);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const { currentUser } = useAuth();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    console.log(currentUser);

    if (currentUser != null) {
      const user = firebase.database().ref("Global/users/" + currentUser.uid);
      user.on("value", (snapshot) => {
        const data = snapshot.val();
        setAdmin(data["admin"]);
        console.log(data);
      });
    }

    if (admin) {
      console.log("fierro puto");
      setData([
        ...data,
        {
          title: "Add Property",
          path: "/form/stepID",
          icon: <BiUserCircle />,
          className: "nav-text",
        },
        {
          title: "Delete Property",
          path: "/delete",
          icon: <BiUserCircle />,
          className: "nav-text",
        },
      ]);
    }
  }, [admin]);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar" onClick={showSidebar}>
        <Link to="#" className="menu-bars">
          <FaBars
            style={{ fontSize: "30px", marginBottom: "0px" }}
            onClick={showSidebar}
          />
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineCloseCircle />
              </Link>
            </li>
            {data.map((obj, index) => {
              return (
                <li key={index} className={obj.className}>
                  <Link to={obj.path}>
                    {obj.icon}
                    <span>{obj.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
