import React, { useState } from "react";
import "./addclient.css";

interface AddClientModalProps {
  onClose: () => void;
}

const AddClientModal: React.FC<AddClientModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      dataNascimento: "",
    });
  };
  const handleCloseModal = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      dataNascimento: "",
    });
    onClose();
  };
  return (
    <div id="modal">
      <div id="modal-content">
        <span id="close" onClick={handleCloseModal}>
          &times;
        </span>
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Telefone:
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Data de Nascimento:
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </label>
          <div id="form-buttons">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  nome: "",
                  email: "",
                  telefone: "",
                  cpf: "",
                  dataNascimento: "",
                }),
                  handleCloseModal();
              }}
            >
              Fechar
            </button>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;
