import styled, { keyframes } from "styled-components";
const primaryColor = "#3498DB";
const secondaryColor = "#001F3F";

const wavesAnimation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${secondaryColor};
  font-family: "Asap", sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  img {
    width: 290px;
    height: 250px;

    @media (max-width: 768px) {
      width: 200px;
      height: 170px;
    }
  }
`;
export const Title = styled.h1`
  font-weight: bold;
  color: #fff;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const LoginForm = styled.form`
  overflow: hidden;
  background-color: ${primaryColor};
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 30px white;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &::before {
    left: 40%;
    bottom: -130%;
    background-color: white;
    animation: ${wavesAnimation} 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: ${secondaryColor};
    animation: ${wavesAnimation} 7s infinite;
  }

  input {
    font-family: "Asap", sans-serif;
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    width: 100%;
    border: 0;
    padding: 10px 10px;
    margin: 15px -10px;
  }

  button {
    font-family: "Asap", sans-serif;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    width: 80px;
    border: 0;
    padding: 10px 0;
    margin-top: 10px;
    margin-left: -5px;
    border-radius: 5px;
    background-color: ${primaryColor};
    transition: background-color 300ms;
  }

  button:hover {
    background-color: ${secondaryColor};
  }
`;

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: white;
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;

  &:hover {
    color: #000000;
  }
`;
