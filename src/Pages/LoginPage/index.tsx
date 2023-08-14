import React from "react";
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

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Title>
          RJMICROCRÉDITO <br /> PESSOA-CLIENTE
        </Title>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
      </Header>
      <LoginForm>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button
          onClick={() => {
            navigate("/Dashboard");
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
