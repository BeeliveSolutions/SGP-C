import React, { useState } from "react";
import "./clients.css";
import TooBar from "../../components/TooBar";
import AddClientModal from "../../components/AddClient";
import ClientDetailsModal from "../../components/ClientDetails";
import ChangeStatusModal from "../../components/ChangeStatus";
import ModalSendReminder from "../../components/SendReminderModal";

const ClientesPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalClientDetails, setShowModalClientDetails] = useState(false);
  const [showModalChangeStatus, setShowModalChangeStatus] = useState(false);
  const [showModalSendReminder, setShowModalSendReminder] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalDetailsClient = () => {
    setShowModalClientDetails(false);
  };

  const handleCloseModalChangeStatus = () => {
    setShowModalChangeStatus(false);
  };

  const handleCloseModalSendReminder = () => {
    setShowModalSendReminder(false);
  };
  return (
    <div id="wrapper">
      <div id="modal-reminder-settings">
        <div id="modal-content">
          <span id="close">&times;</span>
          <h2>Configurações do Lembrete Automático</h2>
          <p>Insira a quantidade de dias de antecedência:</p>
          <input type="number" id="reminderDays" min={1} required />
          <button id="orange-button">Salvar</button>
          <div id="divider"></div>
          <div id="reminder-settings">
            <h3>Opções de Lembrete</h3>
            <label>
              <input type="checkbox" id="dailyReminderCheckbox" />
              Alerta Diário do Vencimento
            </label>
          </div>
          <div id="modal-buttons">
            <button id="orange-button">Fechar</button>
          </div>
        </div>
      </div>

      {showModal && <AddClientModal onClose={handleCloseModal} />}
      <TooBar />

      {showModalClientDetails && (
        <ClientDetailsModal onClose={handleCloseModalDetailsClient} />
      )}

      {showModalChangeStatus && (
        <ChangeStatusModal onClose={handleCloseModalChangeStatus} />
      )}
      {showModalSendReminder && (
        <ModalSendReminder onClose={handleCloseModalSendReminder} />
      )}
      <TooBar />
      <div id="content">
        <div id="header">
          <div id="search">
            <div id="filter">
              <label htmlFor="searchInput">Buscar:</label>
              <input
                type="text"
                id="searchInput"
                placeholder="Digite o nome do cliente..."
              />
            </div>
            <div id="filter">
              <label htmlFor="filterSelect">Filtrar:</label>
              <select id="filterSelect">
                <option value="all">Todos</option>
                <option value="approved">Aprovados</option>
                <option value="not-approved">Não Aprovados</option>
              </select>
            </div>
            <div id="filter">
              <label htmlFor="loanFilter">Faixa de Empréstimo:</label>
              <select id="loanFilter">
                <option value="all">Todos</option>
                <option value="0-5000">R$0 - R$5.000</option>
                <option value="5000-10000">R$5.000 - R$10.000</option>
                <option value="10000-15000">R$10.000 - R$15.000</option>
              </select>
            </div>
          </div>
          <div id="mini-cards">
            <div id="mini-card">
              <h3>Total de Clientes</h3>
              <p>20</p>
            </div>
            <div id="mini-card">
              <h3>Aprovados</h3>
              <p>12</p>
            </div>
            <div id="mini-card">
              <h3>Não Aprovados</h3>
              <p>8</p>
            </div>
            <div id="mini-card">
              <h3>Total Empréstimos</h3>
              <p>R$100.000</p>
            </div>
          </div>
          <label id="reminder-toggle">
            <input type="checkbox" id="reminderToggle" />
            <span id="checkmark"></span>
            <span id="reminder-label">Lembrete de Vencimento Automático</span>
            <span id="gear-icon">
              <i id="fas fa-cog"></i>
            </span>
          </label>
          <button
            id="add-client-btn"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Adicionar Cliente
          </button>
        </div>

        <ul id="client-list">
          <li>
            <div id="client-info">
              <span id="status approved"></span>
              <span id="client-name">José da Silva Pereira</span>
              <span
                onClick={() => {
                  setShowModalClientDetails(true);
                }}
                id="due-date"
              >
                Vencimento: 20/08/2023
              </span>
            </div>
            <div id="client-actions">
              <button
                onClick={() => {
                  setShowModalSendReminder(true);
                }}
                id="send-reminder-btn"
              >
                Enviar Lembrete
              </button>
              <button
                onClick={() => {
                  setShowModalChangeStatus(true);
                }}
                id="change-status-btn"
              >
                Mudar Status
              </button>
              <button
                onClick={() => {
                  setShowModalClientDetails(true);
                }}
                id="view-details-btn"
              >
                Ver Detalhes
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientesPage;
