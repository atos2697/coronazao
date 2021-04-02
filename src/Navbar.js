import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaInstagram } from "react-icons/fa";
import { AiOutlineCloseCircle, AiFillHome } from "react-icons/ai";
import { BiBuildingHouse, BiUserCircle } from "react-icons/bi";
import "./navbar.css";
import { IconContext } from "react-icons";

//npm install react-router-dom

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const data = [
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
      title: "Redes Sociales",
      path: "/redes-sociales",
      icon: <FaInstagram />,
      className: "nav-text",
    },
    {
      title: "Login",
      path: "/signup",
      icon: <BiUserCircle />,
      className: "nav-text",
    },
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
  ];

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
