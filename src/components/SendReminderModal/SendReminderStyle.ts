import styled from "styled-components";

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
  max-width: 500px;
  width: 80%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #999;
`;

export const Heading = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ReminderOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ReminderOption = styled.button<{ color: string }>`
  display: flex;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  gap: 6px;
  align-items: center;
  background-color: ${(props) => props.color};
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: orange;
    transform: scale(1.05);
  }
`;

export const CustomContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CustomMessageOptions = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;
`;
