import React from "react";
import logo from "../../assets/logo.png";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="container">
      <div id="header">
        <h1>
          RJMICROCRÉDITO <br /> PESSOA-CLIENTE
        </h1>
        <div id="logo-container">
          <img src={logo} alt="" />
        </div>
      </div>
      <form id="login">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button
          onClick={() => {
            navigate("/Dashboard");
          }}
          id="loginButton"
        >
          Login
        </button>
        <a href=""> Esqueceu a senha?</a>
      </form>
    </div>
  );
};

export default LoginPage;
