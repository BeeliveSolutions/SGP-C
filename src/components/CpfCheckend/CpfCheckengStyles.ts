// Dentro do seu arquivo de estilos (clientDetailsStyle.js)
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ClientInfoWrapper = styled.div`
  margin-top: 20px;
`;

export const ClientInfo = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background-color: #1b1b69;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f56609;
    }
  }
`;
