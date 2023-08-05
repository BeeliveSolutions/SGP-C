import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChartBar, faUsers } from "@fortawesome/free-solid-svg-icons";
import "./toobar.css";
const TooBar: React.FC = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo da Empresa" />
      </div>
      <h2>RJMICROCRÉDITO</h2>
      <ul className="menu">
        <li className="menu-item">
          <a href="../index.html">
            <FontAwesomeIcon icon={faChartBar} /> Dashboard
          </a>
        </li>
        <li className="menu-item">
          <a href="./Clientes/clientes.html">
            <FontAwesomeIcon icon={faUsers} /> Clientes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TooBar;
