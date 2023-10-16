import React, { useState, useEffect, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ClientInfo,
  ClientInfoWrapper,
  EditButton,
  InfoLabel,
  ModalWrapper,
  ModalContent,
  CloseButton,
} from "./CpfCheckengStyles";
import api from "../../config/api";
type CpfCheckengModalProps = {
  id: number;
  onClose: () => void;
};
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};
const CpfCheckengModal: React.FC<CpfCheckengModalProps> = ({ id, onClose }) => {
  const [editedClient, setEditedClient] = useState({
    nome: "",
    cpf: "",
    cpfCheckDate: "",
    cadastral_cpf_situation: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  function getStatusCpf() {
    setIsLoading(true);
    setLoadingMessage("Pesquisando Situação Cadastral do Cliente");
    api.get(`clients/all/getStatusCpfRpa/${id}`).then((response) => {
      console.log(response.data);
      setIsLoading(false);
      setLoadingMessage("");
    });
  }

  const formatIsoDateForInput = (isoDate: string) => {
    if (isoDate === null) {
      return null;
    }
    const dateObject = new Date(isoDate);
    const formattedDate = dateObject.toLocaleDateString().split("T")[0];
    return formattedDate;
  };

  useEffect(() => {
    const fetchDataClient = async () => {
      await api.get(`/clients/${id}`).then((response) => {
        const formattedData = {
          nome: response.data.name,
          cpf: response.data.cpf,
          cpfCheckDate: formatIsoDateForInput(response.data.cpf_check_date),
          cadastral_cpf_situation:
            response.data.cadastral_cpf_situation || "Não Pesquisado",
        };
        setEditedClient(formattedData);
      });
    };
    getStatusCpf();
    fetchDataClient();
  }, [id]);

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Consulta CPF Automática</h2>
        {isLoading && (
          <div>
            <p>{loadingMessage}</p>

            <FadeLoader
              color="red"
              loading={isLoading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {!isLoading && (
          <ClientInfoWrapper>
            <ClientInfo>
              <p>
                <InfoLabel>Nome:</InfoLabel>
                <span>{editedClient.nome}</span>
              </p>
              <p>
                <InfoLabel>CPF:</InfoLabel>
                <span>{editedClient.cpf}</span>
              </p>
              <p>
                <InfoLabel>Data de Checagem do CPF:</InfoLabel>
                <span>
                  {editedClient.cpfCheckDate
                    ? editedClient.cpfCheckDate
                    : "Não pesquisado"}
                </span>
              </p>
              <p>
                <InfoLabel>Situação Cadastral:</InfoLabel>
                <span>{editedClient.cadastral_cpf_situation}</span>
              </p>
            </ClientInfo>
          </ClientInfoWrapper>
        )}

        <EditButton>
          <button onClick={onClose}>Fechar</button>
        </EditButton>
      </ModalContent>
      <ToastContainer />
    </ModalWrapper>
  );
};

export default CpfCheckengModal;
