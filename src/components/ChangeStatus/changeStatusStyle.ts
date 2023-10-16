import styled from "styled-components";
import DatePicker from "react-datepicker";
const primaryColor = "#3498DB";
const secondaryColor = "#001F3F";

export const ModalChangeStatus = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 900px;
  width: 80%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: ${secondaryColor};
`;

export const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: ${secondaryColor};
`;

export const StatusOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  align-items: flex-start;

  flex-direction: column;
`;
export const LoanValueInput = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const StatusOption = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${primaryColor};
  color: #fff;
  transition: all 0.3s ease-in-out;

  background-color: ${(props) => props.color || secondaryColor};
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${primaryColor};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${primaryColor};
  font-size: 16px;
`;
