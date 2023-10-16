import React, { useEffect, useState } from "react";
import {
  CloseButton,
  Heading,
  Input,
  Label,
  LoanValueInput,
  ModalChangeStatus,
  ModalContent,
  StatusOptions,
  StatusOption,
  WrapperInput,
} from "./changeStatusStyle.ts";
import "react-datepicker/dist/react-datepicker.css";
import { EditButton } from "../ClientDetails/clientDetailsStyle.ts";
import api from "../../config/api.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const primaryColor = "#1b1b69";
interface ChangeStatusProps {
  onClose: () => void;
  id: string;
}

const ChangeStatusModal: React.FC<ChangeStatusProps> = ({ onClose, id }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDueDate, setLoanDueDate] = useState(" ");
  const [loanCpfCheckDate, setLoanCpfCheckDate] = useState(" ");
  const [selectedStatus, setSelectedStatus] = useState("");

  const formatIsoDateForInput = (isoDate: string) => {
    const dateObject = new Date(isoDate);
    dateObject.setMinutes(
      dateObject.getMinutes() + dateObject.getTimezoneOffset()
    ); // Ajusta o fuso horário
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const year = dateObject.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  useEffect(() => {
    const getUser = async () => {
      if (id) {
        await api.get(`clients/${id}`).then((response) => {
          setLoanDueDate(response.data.loan_due_date);
          setLoanAmount(response.data.loan_amount);
          setSelectedStatus(response.data.status);
          setLoanCpfCheckDate(response.data.cpf_check_date);
        });
      }
    };

    getUser();
  }, [id]);

  const handleSaveClient = async () => {
    if (id) {
      if (loanCpfCheckDate === null && loanDueDate) {
        return toast.info(
          "Só é possivel alocar uma data de parcela ao cliente caso tenha verificado o CPF do cliente!",
          {
            autoClose: false,
          }
        );
      }
      const currentDate = new Date();
      const selectedDueDate = new Date(loanDueDate);

      if (selectedDueDate <= currentDate) {
        return toast.warning(
          "A data da parcela deve ser posterior à data atual."
        );
      }

      await api
        .put(`clients/${id}`, {
          status: selectedStatus,
          loanAmount: loanAmount,
          loanDueDate: formatIsoDateForInput(loanDueDate),
          cpfCheckDate: formatIsoDateForInput(loanCpfCheckDate),
        })
        .then((response) => {
          toast.success("Moficações de status, realizada(as) com sucesso!");
        })
        .catch((error) => {
          toast.error("Algum erro aconteceu, contate o desenvolvedor!");
        });

      onClose();
    }
  };

  return (
    <ModalChangeStatus>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Heading>Mudar Status</Heading>
        <StatusOptions>
          <StatusOption
            color={selectedStatus === "pre-cadastro" ? primaryColor : ""}
            onClick={() => setSelectedStatus("pre-cadastro")}
          >
            Pré Cadastro
          </StatusOption>
          <StatusOption
            color={selectedStatus === "cadastrado" ? primaryColor : ""}
            onClick={() => setSelectedStatus("cadastrado")}
          >
            Cadastrado
          </StatusOption>
          <StatusOption
            color={selectedStatus === "pre-aprovado" ? primaryColor : ""}
            onClick={() => setSelectedStatus("pre-aprovado")}
          >
            Pré Aprovado
          </StatusOption>
          <StatusOption
            color={selectedStatus === "aprovado" ? primaryColor : ""}
            onClick={() => setSelectedStatus("aprovado")}
          >
            Aprovado
          </StatusOption>
          <StatusOption
            color={selectedStatus === "rejeitado" ? primaryColor : ""}
            onClick={() => setSelectedStatus("rejeitado")}
          >
            Não Aprovado
          </StatusOption>
        </StatusOptions>
        <LoanValueInput>
          <WrapperInput>
            <Label htmlFor="loanValue">Valores do Empréstimo:</Label>
            <Input
              type="number"
              id="loanValue"
              placeholder="Digite o valor do empréstimo..."
              onChange={(e) => {
                setLoanAmount(e.target.value);
              }}
              value={loanAmount}
            />
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="loanValue">Data da Parcela:</Label>
            <Input
              type="date"
              name="loanDueDate"
              onChange={(event) => setLoanDueDate(event.target.value)}
              value={
                loanDueDate === null ? "" : formatIsoDateForInput(loanDueDate)
              }
            />
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="loanValue">Data da consulta do CPF:</Label>
            <Input
              type="date"
              name="cpf_check_date"
              onChange={(event) => setLoanCpfCheckDate(event.target.value)}
              value={
                loanCpfCheckDate === null
                  ? ""
                  : formatIsoDateForInput(loanCpfCheckDate)
              }
            />
          </WrapperInput>
        </LoanValueInput>
        <EditButton>
          <button
            onClick={() => {
              handleSaveClient();
            }}
          >
            Salvar
          </button>
        </EditButton>
      </ModalContent>
      <ToastContainer />
    </ModalChangeStatus>
  );
};

export default ChangeStatusModal;
