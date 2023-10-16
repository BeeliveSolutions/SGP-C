import React, { useEffect, useState } from "react";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  CreateButton,
} from "./addEventModalStyled";
import { Button, FormButtons } from "../AddClient/AddClientStyle";
import api from "../../config/api";
import { toast, ToastContainer } from "react-toastify";
type AddEventModalProps = {
  onClose: () => void;
  selectedDate: string;
  id_event: string | null;
};

const AddEventModal: React.FC<AddEventModalProps> = ({
  onClose,
  selectedDate,
  id_event,
}) => {
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [updatedEvent, setUpdatedEvent] = useState(false);

  const formatIsoDateTimeForInput = (isoDate: string) => {
    const dateObject = new Date(isoDate);

    const formattedDate = dateObject.toISOString().substring(0, 16);

    return formattedDate;
  };
  const verifyEventId = async () => {
    if (id_event) {
      await api.get(`appointments/${id_event}`).then((response) => {
        console.log(response.data);
        setStartDate(formatIsoDateTimeForInput(response.data.start_date));
        setEndDate(formatIsoDateTimeForInput(response.data.end_date));
        setDescription(response.data.description);
        setUpdatedEvent(true);
      });
    } else {
      setStartDate(formatIsoDateTimeForInput(selectedDate));
    }
  };
  const handleSaveEvent = async (e) => {
    e.preventDefault();
    if (id_event) {
      await api
        .put(`appointments/${id_event}`, {
          description: description,
          startDate: startDate,
          endDate: endDate,
        })
        .then((response) => {
          toast.success("Evento atualizado com sucesso!");
          onClose();
        })
        .catch((error) => {
          toast.error("Erro ao atualizar Evento");
        });
    } else {
      await api
        .post(`appointments`, {
          description: description,
          startDate: startDate,
          endDate: endDate,
        })
        .then((response) => {
          toast.success("Evento Criado com sucesso!");
          onClose();
        })
        .catch((error) => {
          toast.error("Erro ao Criar Evento");
        });
    }
  };

  const handleDeletedEvent = async (e) => {
    e.preventDefault();
    if (id_event) {
      await api
        .delete(`appointments/${id_event}`)
        .then((response) => {
          toast.success("Evento Deletado com sucesso!");
          onClose();
        })
        .catch((error) => {
          toast.error("Erro ao Deletar Evento");
        });
    }
  };

  useEffect(() => {
    verifyEventId();
  }, [id_event]);
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <h2>{updatedEvent ? "Atualizar evento" : "Criar Evento"}</h2>
        <p>Data Selecionada: {selectedDate}</p>
        <Form>
          <FormGroup>
            <Label>Descrição</Label>
            <Input
              type="text"
              placeholder="Digite a descrição do evento"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Data de Início</Label>
            <Input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Data de Fim</Label>
            <Input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormGroup>
          <FormButtons>
            <CreateButton onClick={handleSaveEvent}>
              {updatedEvent ? "Atualizar evento" : "Criar Evento"}
            </CreateButton>
            <CreateButton onClick={onClose}>Cancelar</CreateButton>
            {id_event ? (
              <CreateButton
                onClick={(e) => {
                  handleDeletedEvent(e);
                }}
              >
                Deletar
              </CreateButton>
            ) : (
              ""
            )}
          </FormButtons>
        </Form>
        <ToastContainer />
      </ModalContent>
    </ModalWrapper>
  );
};

export default AddEventModal;
