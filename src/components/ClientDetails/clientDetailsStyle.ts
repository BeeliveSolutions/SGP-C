import { styled } from "styled-components";

const primaryColor = "#3498DB";
const secondaryColor = "#001F3F";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 800px; /* Increase the width as needed */
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 24px;
  color: ${primaryColor};
  cursor: pointer;
`;

export const ClientInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ClientInfo = styled.div`
  width: 48%; /* Adjust as needed */
`;

export const FinancialInfo = styled.div`
  width: 48%; /* Adjust as needed */
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${primaryColor};
`;

export const InfoLabel = styled.strong`
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${secondaryColor};
  border-radius: 6px;
  font-size: 16px;
  margin: 8px 0;
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid ${secondaryColor};
  border-radius: 6px;
  font-size: 16px;
  margin: 8px 0;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23f56609' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 30px;
`;

export const EditButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    padding: 12px 24px;
    background-color: ${(props) =>
      props.backgroundColor || `${secondaryColor}`};
    color: ${(props) => props.textColor || "#fff"};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) =>
        props.hoverBackgroundColor || `${secondaryColor}`};
    }
  }
`;
