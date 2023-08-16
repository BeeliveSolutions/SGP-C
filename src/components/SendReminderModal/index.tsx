import React, { useState } from "react";
import {
  ModalSendReminderWrapper,
  ModalContent,
  CloseButton,
  Heading,
  ReminderOptions,
  ReminderOption,
  CustomMessageOptions,
  Label,
  Textarea,
  CustomContainer,
  Input,
} from "./SendReminderStyle.ts";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaSms } from "react-icons/fa";
type ModalSendReminderProps = {
  onClose: () => void;
};

const ModalSendReminder: React.FC<ModalSendReminderProps> = ({ onClose }) => {
  const [customMessage, setCustomMessage] = useState("");
  const [showCustomMessage, setShowCustomMessage] = useState(false);

  const handleCheckboxChange = () => {
    setShowCustomMessage(!showCustomMessage);
  };

  const handleCustomMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomMessage(event.target.value);
  };

  return (
    <ModalSendReminderWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Heading>Enviar Lembrete</Heading>
        <ReminderOptions>
          <ReminderOption color="#f56609">
            <AiOutlineMail size={25} /> Email
          </ReminderOption>
          <ReminderOption color="#007bff">
            <FaSms size={20} />
            SMS
          </ReminderOption>
          <ReminderOption color="#28a745">
            <FaWhatsapp size={20} /> WhatsApp
          </ReminderOption>
        </ReminderOptions>
        <CustomMessageOptions>
          <CustomContainer>
            <Input
              type="checkbox"
              id="customMessageCheckbox"
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="customMessageCheckbox">
              Mensagem Personalizada
            </Label>
          </CustomContainer>
          {showCustomMessage && (
            <Textarea
              id="customMessageInput"
              placeholder="Digite sua mensagem..."
              rows={7}
              value={customMessage}
              onChange={handleCustomMessageChange}
            />
          )}
        </CustomMessageOptions>
      </ModalContent>
    </ModalSendReminderWrapper>
  );
};

export default ModalSendReminder;
