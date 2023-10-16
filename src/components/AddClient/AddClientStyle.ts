import { styled } from "styled-components";

const secondaryColor = "#fa7dc3";
const primaryColor = "#000000";

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  z-index: 1;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  background-color: #ffffffff;
`;

export const ModalTitle = styled.h2`
  color: ${secondaryColor};
  font-size: 28px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  color: ${secondaryColor};
  justify-content: flex-start;
  font-weight: bold;
  font-size: 18px;
  flex-direction: column;
  margin-bottom: 20px;
  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid ${primaryColor};
  border-radius: 6px;
  font-size: 16px;
  color: ${primaryColor};
`;

export const FormButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
`;

export const SubmitButton = styled(Button)`
  background-color: ${primaryColor};
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

export const CloseButton = styled(Button)`
  background-color: #e70909;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c40c0c; /* Cor mais escura no hover */
  }
`;

// Adicione espaçamento entre os botões

export const CloseIcon = styled.span`
  color: #aaa;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: color 0.3s;

  &:hover {
    color: #e60202;
  }
`;
