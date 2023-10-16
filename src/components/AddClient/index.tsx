import React, { useState } from "react";
import {
  CloseButton,
  CloseIcon,
  Form,
  FormButtons,
  Input,
  Label,
  ModalContent,
  ModalTitle,
  ModalWrapper,
  SubmitButton,
} from "./AddClientStyle";
import api from "../../config/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCreditCard,
  FiCalendar,
} from "react-icons/fi"; // Importe os ícones aqui

interface AddClientModalProps {
  onClose: () => void;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post(
        "clients",
        {
          ...formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Usuário criado com sucesso!");
    } catch (error) {
      if (error.response) {
        toast.error("Algum erro aconteceu, contate o desenvolvedor!");
      }
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      cpf: "",
      birthDate: "",
    });
  };

  const handleCloseModal = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      cpf: "",
      birthDate: "",
    });
    onClose();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseIcon onClick={handleCloseModal}>&times;</CloseIcon>
        <ModalTitle>Cadastro de Cliente</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            <label htmlFor="">
              Nome: <FiUser />
            </label>

            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <label htmlFor="">
              Email: <FiMail />
            </label>

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <label htmlFor="">
              Telefone: <FiPhone />
            </label>

            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <label htmlFor="">
              CPF:
              <FiCreditCard />
            </label>

            <Input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <label htmlFor="">
              Data de Nascimento <FiCalendar />:
            </label>

            <Input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </Label>
          <FormButtons>
            <CloseButton
              type="button"
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  cpf: "",
                  birthDate: "",
                });
                handleCloseModal();
              }}
            >
              Fechar
            </CloseButton>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </FormButtons>
        </Form>
      </ModalContent>
      <ToastContainer />
    </ModalWrapper>
  );
};

export default AddClientModal;
