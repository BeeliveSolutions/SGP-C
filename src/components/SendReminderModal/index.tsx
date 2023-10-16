import React, { useEffect, useState } from "react";
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
  Select,
} from "./SendReminderStyle.ts";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaSms } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import api from "../../config/api.ts";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { EditButton } from "../ClientDetails/clientDetailsStyle.ts";
import { Button } from "../AddClient/AddClientStyle.ts";
import { ToastContainer, toast } from "react-toastify";

type ModalSendReminderProps = {
  onClose: () => void;
  selectedClientId: string;
};

const formatDateToLongString = (date: Date | null): string => {
  if (!date) {
    return "";
  }

  const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
  const shortFormattedDate = format(date, "dd/MM/yyyy");

  return `${formattedDate} (${shortFormattedDate})`;
};

const ModalSendReminder: React.FC<ModalSendReminderProps> = ({
  onClose,
  selectedClientId,
}) => {
  const [customMessage, setCustomMessage] = useState("");
  const [automaticMessages, setAutomaticMessages] = useState([]);
  const [showCustomMessage, setShowCustomMessage] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("email");
  const [clientName, setClientName] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleCheckboxChange = () => {
    setShowCustomMessage(!showCustomMessage);
  };

  const handleCustomMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomMessage(event.target.value);
  };

  const handleCustomMessageKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita a quebra de linha padrão
      const selectionStart = event.currentTarget.selectionStart;
      const selectionEnd = event.currentTarget.selectionEnd;
      const newMessage =
        customMessage.substring(0, selectionStart) +
        "\n" +
        customMessage.substring(selectionEnd);

      setCustomMessage(newMessage);
    }
  };
  const handleAutoMessageSelect = (message: string) => {
    setCustomMessage(message);
  };

  const getClient = async () => {
    await api.get(`clients/${selectedClientId}`).then((response) => {
      setClientName(response.data.name);
      setDueDate(new Date(response.data.loan_due_date));
    });
  };

  const automaticMessagesApi = async () => {
    await api.get(`messages`).then((response) => {
      setAutomaticMessages(response.data);
    });
  };

  const sendMessage = async () => {
    const idUser = await localStorage.getItem("idUser");

    let formattedMessage = customMessage;

    if (deliveryMethod === "email" || deliveryMethod === "all") {
      formattedMessage = customMessage.replace(/\n/g, "<br/>"); // Substitui as quebras de linha do textarea por <br/>
    }

    api
      .post("sendMessage", {
        client_id: selectedClientId,
        user_id: idUser,
        message: formattedMessage,
        deliveryMethod: deliveryMethod,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Mensagem enviada com sucesso para ", clientName);
      })
      .catch((err) => {
        toast.error("Erro ao Enviar Notifição");
      });
  };
  useEffect(() => {
    getClient();
    automaticMessagesApi();
  }, []);

  return (
    <ModalSendReminderWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Heading>Enviar Lembrete para {clientName}</Heading>
        <p>Data da próxima Parcela: {formatDateToLongString(dueDate)}</p>
        <ReminderOptions>
          <ReminderOption
            color="#f56609"
            active={deliveryMethod === "email"}
            onClick={() => {
              setDeliveryMethod("email");
            }}
          >
            <AiOutlineMail size={30} /> Email
          </ReminderOption>
          <ReminderOption
            color="#007bff"
            active={deliveryMethod === "sms"}
            onClick={() => {
              setDeliveryMethod("sms");
            }}
          >
            <FaSms size={25} /> SMS
          </ReminderOption>

          <ReminderOption
            color="#3007ff"
            active={deliveryMethod === "all"}
            onClick={() => {
              setDeliveryMethod("all");
            }}
          >
            <TiMessages size={25} /> Todos
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
              Usar Mensagem Personalizada
            </Label>
          </CustomContainer>
          {showCustomMessage && (
            <Textarea
              id="customMessageInput"
              placeholder="Digite sua mensagem..."
              rows={7}
              value={customMessage}
              onChange={handleCustomMessageChange}
              onKeyDown={handleCustomMessageKeyDown}
            />
          )}
        </CustomMessageOptions>
        <Label>Mensagens Automáticas:</Label>
        <Select
          value={customMessage}
          onChange={(e) => handleAutoMessageSelect(e.target.value)}
        >
          <option value="">Selecione uma mensagem...</option>
          {automaticMessages.map((message) => (
            <option key={message.id} value={message.message}>
              {message.message}
            </option>
          ))}
        </Select>

        <EditButton>
          <button color="red" onClick={sendMessage}>
            Enviar mensagem
          </button>
        </EditButton>
      </ModalContent>
      <ToastContainer />
    </ModalSendReminderWrapper>
  );
};

export default ModalSendReminder;
