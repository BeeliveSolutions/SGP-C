import React from "react";

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

import { EditButton } from "../ClientDetails/clientDetailsStyle.ts";
interface ChangeStatusProps {
  onClose: () => void;
}
const ChangeStatusModal: React.FC<ChangeStatusProps> = ({ onClose }) => {
  return (
    <ModalChangeStatus>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Heading>Mudar Status</Heading>
        <StatusOptions>
          <StatusOption>Pré Cadastro</StatusOption>
          <StatusOption>Não Aprovado</StatusOption>
          <StatusOption>Pré Aprovado</StatusOption>
          <StatusOption>Aprovado</StatusOption>
        </StatusOptions>
        <LoanValueInput>
          <WrapperInput>
            <Label htmlFor="loanValue">Valores do Empréstimo:</Label>
            <Input
              type="text"
              datatype="yyy-mm"
              id="loanValue"
              placeholder="Digite o valor do empréstimo..."
            />
          </WrapperInput>
          <WrapperInput>
            <Label htmlFor="loanValue">Data da Parcela:</Label>
            <Input
              type="date"
              id="loanValue"
              placeholder="Digite a data da parcela..."
            />
          </WrapperInput>
        </LoanValueInput>
        <EditButton>
          <button>Salvar</button>
        </EditButton>
      </ModalContent>
    </ModalChangeStatus>
  );
};

export default ChangeStatusModal;
