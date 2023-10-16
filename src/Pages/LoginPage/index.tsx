import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  LogoContainer,
  Title,
  LoginForm,
  ForgotPasswordLink,
} from "./LoginStyles";
import api from "../../config/api";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/Dashboard");
    }
  }, [token, navigate]);

  const [username, setUsername] = useState(""); // Estado para o campo de login
  const [password, setPassword] = useState(""); // Estado para o campo de senha

  async function handleSignedIn(e) {
    e.preventDefault();

    try {
      const response = await api.post(
        "login",
        {
          login: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        const token = response.data.token.token;
        const idUser = response.data.user.id;
        localStorage.setItem("token", token);
        localStorage.setItem("idUser", idUser);
        console.log(token);
        navigate("Dashboard");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
      </Header>
      <LoginForm>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            handleSignedIn(e); // Corrigido para chamar a função com o evento
          }}
        >
          Login
        </button>
        <ForgotPasswordLink href=""> Esqueceu a senha?</ForgotPasswordLink>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;
