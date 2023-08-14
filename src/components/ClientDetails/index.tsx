import React, { useState } from "react";
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

type ClientDetailsModalProps = {
  // client: {
  //   id: number;
  //   name: string;
  //   email: string;
  //   phone: string;
  //   birthDate: string;
  //   cpf: string;
  //   loanAmount: number;
  //   loanDueDate: string;
  //   cpfCheckDate: string;
  //   status:
  //     | "pre-cadastro"
  //     | "cadastrado"
  //     | "pre-aprovado"
  //     | "aprovado"
  //     | "rejeitado";
  // };
  onClose: () => void;
};
const initialClient = {
  id: 1,
  name: "João Silva",
  email: "joao@example.com",
  phone: "555-1234",
  birthDate: "1990-01-01",
  cpf: "123.456.789-00",
  status: "pre-cadastro",
  loanAmount: 5000,
  loanDueDate: "2023-08-31",
  cpfCheckDate: "2023-07-15",
};
const ClientDetailsModal: React.FC<ClientDetailsModalProps> = ({ onClose }) => {
  const [editedClient, setEditedClient] = useState(initialClient);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    // Lógica para salvar as alterações no cliente
    console.log(editedClient);
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Detalhes do Cliente</h2>
        <ClientInfoWrapper>
          <ClientInfo>
            <SectionTitle>Dados Pessoais</SectionTitle>
            <p>
              <InfoLabel>ID:</InfoLabel> {editedClient.id}
            </p>
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
                value={editedClient.loanDueDate}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Data de Checagem do CPF:</InfoLabel>{" "}
              <InputField
                type="date"
                name="cpfCheckDate"
                value={editedClient.cpfCheckDate}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <InfoLabel>Status:</InfoLabel>{" "}
              <SelectField name="status" value={editedClient.status}>
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
      </ModalContent>
    </ModalWrapper>
  );
};

export default ClientDetailsModal;
