import styled, { css } from "styled-components";
const primaryColor = "#3498DB";
const secondaryColor = "#001F3F";
export const ModalSendReminderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    overflow-y: visible;
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
  }
`;

export const CloseButton = styled.span`
  align-self: flex-end;
  font-size: 28px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s;

  &:hover {
    color: #e60202;
  }
`;

export const Heading = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: #1b1b69;
`;

export const ReminderOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ReminderOption = styled.button<{
  color: string;
  active?: boolean;
}>`
  display: flex;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  gap: 10px;
  align-items: center;
  background-color: ${secondaryColor};
  transition: background-color 0.3s, transform 0.3s;

  ${(props) =>
    props.active &&
    css`
      background-color: ${primaryColor};
      transform: scale(1);
    `}

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CustomMessageOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;
  margin-top: 5px;
`;

export const Select = styled.select`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  color: #555;

  option {
    font-size: 16px;
    color: #000;
    margin-bottom: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
