import React, { useState } from "react";
import "./clients.css";
import TooBar from "../../components/TooBar";
import AddClientModal from "../../components/AddClient";

const ClientesPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="wrapper">
      <div className="modal-change-status">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Mudar Status</h2>
          <div className="status-options">
            <button className="status-option">Aprovado</button>
            <button className="status-option">Não Aprovado</button>
          </div>
          <div className="loan-value-input">
            <label htmlFor="loanValue">Valor do Empréstimo:</label>
            <input
              type="text"
              id="loanValue"
              placeholder="Digite o valor do empréstimo..."
            />
          </div>
        </div>
      </div>

      <div className="modal-send-reminder">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Enviar Lembrete</h2>
          <div className="reminder-options">
            <button className="reminder-option orange">
              <i className="fas fa-envelope"></i> Email
            </button>
            <button className="reminder-option blue">
              <i className="fas fa-comment-alt"></i> SMS
            </button>
            <button className="reminder-option green">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
          </div>
          <div className="message-options">
            <input type="checkbox" id="customMessageCheckbox" />
            <label htmlFor="customMessageCheckbox">
              Mensagem Personalizada
            </label>
            <textarea
              id="customMessageInput"
              placeholder="Digite sua mensagem..."
              rows={4}
              style={{ display: "none" }}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="modal-reminder-settings">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Configurações do Lembrete Automático</h2>
          <p>Insira a quantidade de dias de antecedência:</p>
          <input type="number" id="reminderDays" min={1} required />
          <button className="orange-button">Salvar</button>
          <div className="divider"></div>
          <div className="reminder-settings">
            <h3>Opções de Lembrete</h3>
            <label>
              <input type="checkbox" id="dailyReminderCheckbox" />
              Alerta Diário do Vencimento
            </label>
          </div>
          <div className="modal-buttons">
            <button className="orange-button">Fechar</button>
          </div>
        </div>
      </div>

      {showModal && <AddClientModal onClose={handleCloseModal} />}
      <TooBar />
      <div className="content">
        <div className="header">
          <div className="search">
            <div className="filter">
              <label htmlFor="searchInput">Buscar:</label>
              <input
                type="text"
                id="searchInput"
                placeholder="Digite o nome do cliente..."
              />
            </div>
            <div className="filter">
              <label htmlFor="filterSelect">Filtrar:</label>
              <select id="filterSelect">
                <option value="all">Todos</option>
                <option value="approved">Aprovados</option>
                <option value="not-approved">Não Aprovados</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="loanFilter">Faixa de Empréstimo:</label>
              <select id="loanFilter">
                <option value="all">Todos</option>
                <option value="0-5000">R$0 - R$5.000</option>
                <option value="5000-10000">R$5.000 - R$10.000</option>
                <option value="10000-15000">R$10.000 - R$15.000</option>
              </select>
            </div>
          </div>
          <div className="mini-cards">
            <div className="mini-card">
              <h3>Total de Clientes</h3>
              <p>20</p>
            </div>
            <div className="mini-card">
              <h3>Aprovados</h3>
              <p>12</p>
            </div>
            <div className="mini-card">
              <h3>Não Aprovados</h3>
              <p>8</p>
            </div>
            <div className="mini-card">
              <h3>Total Empréstimos</h3>
              <p>R$100.000</p>
            </div>
          </div>
          <label className="reminder-toggle">
            <input type="checkbox" id="reminderToggle" />
            <span className="checkmark"></span>
            <span className="reminder-label">
              Lembrete de Vencimento Automático
            </span>
            <span className="gear-icon">
              <i className="fas fa-cog"></i>
            </span>
          </label>
          <button
            className="add-client-btn"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Adicionar Cliente
          </button>
        </div>

        <ul className="client-list">
          <li>
            <div className="client-info">
              <span className="status approved"></span>
              <span className="client-name">José da Silva Pereira</span>
              <span className="due-date">Vencimento: 20/08/2023</span>
            </div>
            <div className="client-actions">
              <button className="send-reminder-btn">Enviar Lembrete</button>
              <button className="change-status-btn">Mudar Status</button>
              <button className="view-details-btn">Ver Detalhes</button>
            </div>
          </li>
          {/* ... (outros clientes) ... */}
        </ul>
      </div>
    </div>
  );
};

export default ClientesPage;
