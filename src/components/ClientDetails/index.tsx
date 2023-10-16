import React, { useState, useEffect } from "react";
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ClientInfoWrapper,
  ClientInfo,
  FinancialInfo,
  SectionTitle,
  InfoLabel,
  InputField,
  SelectField,
  EditButton,
} from "./clientDetailsStyle";
import api from "../../config/api";
import { clear } from "localforage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type ClientDetailsModalProps = {
  id: number;
  onClose: () => void;
};

const ClientDetailsModal: React.FC<ClientDetailsModalProps> = ({
  onClose,
  id,
}) => {
  const [hasUpdatedClient, setHasUpdatedClient] = useState(false);
  const [editedClient, setEditedClient] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    cpf: "",
    status: "",
    loanAmount: 0.0,
    loanDueDate: "",
    cpfCheckDate: "",
    cadastral_cpf_situation: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };
  const saveChanges = async () => {
    if (editedClient.loanDueDate !== null) {
      const currentDate = new Date();
      const selectedDueDate = new Date(editedClient.loanDueDate);
      if (selectedDueDate < currentDate) {
        return toast.warning(
          "A data da parcela deve ser posterior à data atual."
        );
      }
    }

    await api
      .put(`/clients/${id}`, { ...editedClient })
      .then((response) => {
        toast.success("Usuario atualizado com sucesso!");
        setEditedClient(response.data);
      })
      .catch((error) => {
        toast.error("Algum erro aconteceu, contate o desenvolvedor!");
        console.error(error);
      });
    onClose();
    setHasUpdatedClient(true);
  };

  const formatIsoDateForInput = (isoDate: string) => {
    if (isoDate === null) {
      return null;
    }
    const dateObject = new Date(isoDate);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
  };
  const handleDeletedClient = async () => {
    if (id) {
      await api
        .delete(`clients/${id}`)
        .then((response) => {
          toast.success("Usuario Deletado com sucesso!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Algum erro aconteceu, contate o desenvolvedor!");
        });
      onClose();
    }
  };
  useEffect(() => {
    const fetchDataClient = async () => {
      await api.get(`/clients/${id}`).then((response) => {
        const formattedData = {
          ...response.data,
          loanAmount: response.data.loan_amount,
          birthDate: formatIsoDateForInput(response.data.birth_date),
          loanDueDate: formatIsoDateForInput(response.data.loan_due_date),
          cpfCheckDate: formatIsoDateForInput(response.data.cpf_check_date),
        };
        setEditedClient(formattedData);
      });
    };

    fetchDataClient();
  }, [id, hasUpdatedClient]);
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Detalhes do Cliente</h2>
        <ClientInfoWrapper>
          <ClientInfo>
            <SectionTitle>Dados Pessoais</SectionTitle>

            <p>
              <InfoLabel>Nome:</InfoLabel>{" "}
              <InputField
                type="text"
                name="name"
                value={editedClient.name}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Email:</InfoLabel>{" "}
              <InputField
                type="text"
                name="email"
                value={editedClient.email}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Telefone:</InfoLabel>{" "}
              <InputField
                type="text"
                name="phone"
                value={editedClient.phone}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Data de Nascimento:</InfoLabel>{" "}
              <InputField
                type="date"
                name="birthDate"
                value={editedClient.birthDate}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>CPF:</InfoLabel>{" "}
              <InputField
                type="text"
                name="cpf"
                value={editedClient.cpf}
                onChange={handleInputChange}
              />
            </p>
          </ClientInfo>
          <FinancialInfo>
            <SectionTitle>Dados Financeiros</SectionTitle>
            <p>
              <InfoLabel>Valor do Empréstimo:</InfoLabel>{" "}
              <InputField
                type="number"
                name="loanAmount"
                value={editedClient.loanAmount}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Data de Vencimento do Empréstimo:</InfoLabel>{" "}
              <InputField
                type="date"
                name="loanDueDate"
                value={
                  editedClient.loanDueDate === null
                    ? ""
                    : editedClient.loanDueDate
                }
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Data de Checagem do CPF:</InfoLabel>{" "}
              <InputField
                type="date"
                name="cpfCheckDate"
                value={
                  editedClient.cpfCheckDate === null
                    ? ""
                    : editedClient.cpfCheckDate
                }
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Situação Cadastral:</InfoLabel>{" "}
              <InputField
                type="text"
                name="cadastral_cpf_situation"
                value={
                  editedClient.cadastral_cpf_situation === null
                    ? "Não Pesquisado"
                    : editedClient.cadastral_cpf_situation
                }
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Status:</InfoLabel>{" "}
              <SelectField
                name="status"
                value={editedClient.status}
                onChange={handleInputChange}
              >
                <option value="pre-cadastro">Pré-cadastro</option>
                <option value="cadastrado">Cadastrado</option>
                <option value="pre-aprovado">Pré-aprovado</option>
                <option value="aprovado">Aprovado</option>
                <option value="rejeitado">Não Aprovado</option>
              </SelectField>
            </p>
          </FinancialInfo>
        </ClientInfoWrapper>

        <EditButton>
          <button onClick={saveChanges}>Salvar</button>
        </EditButton>
        <EditButton backgroundColor="red" hoverBackgroundColor="blue">
          <button color="red" onClick={handleDeletedClient}>
            Deletar Cliente
          </button>
        </EditButton>
      </ModalContent>
      <ToastContainer />
    </ModalWrapper>
  );
};

export default ClientDetailsModal;
