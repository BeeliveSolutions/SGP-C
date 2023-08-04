import React from "react";
import logo from "../../assets/logo.png";
import "./login.css";

const LoginPage: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>
          RJMICROCRÉDITO <br /> PESSOA-CLIENTE
        </h1>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </div>
      <form className="login">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button id="loginButton">Login</button>
        <a href=""> Esqueceu a senha?</a>
      </form>
    </div>
  );
};

export default LoginPage;
