import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import brLocale from "@fullcalendar/core/locales/pt-br";
import interactionPlugin from "@fullcalendar/interaction";
import TooBar from "../../components/TooBar";

const DashboardPage: React.FC = () => {
  return (
    <div id="wrapper">
      <TooBar />
      <div id="content">
        <div id="header">
          <h1>SISTEMA GERENCIADOR PESSOA-CLIENTE</h1>
        </div>
        <div id="card-wrapper">
          <div id="card">
            <h2>Total de Clientes</h2>
            <span>2500.</span>
          </div>
          <div id="card">
            <h2>Total de Clientes Não Aprovados</h2>
            <span>500.</span>
          </div>
          <div id="card">
            <h2>Total de Clientes Aprovados</h2>
            <span>2000</span>
          </div>

          {/* New card for pré-cadastros */}
          <div id="card">
            <h2>Total de Pré-cadastros</h2>
            <span>50</span>
          </div>
          <div id="search">
            <label htmlFor="searchInput">Pesquisar Cliente</label>
            <div id="input-icon-center">
              <input type="text" id="searchInput" name="searchInput" />
              <span id="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div id="box-line">
            <FullCalendar
              height={"700px"}
              plugins={[dayGridPlugin, interactionPlugin]}
              locale={brLocale}
              selectable={true}
              select={(info) => {
                alert("Clicado em: " + info.startStr);
              }}
              eventBackgroundColor="#54354"
            />

            <div id="card clients">
              <h2>Últimos Clientes Cadastrados</h2>
              <ul id="client-list">
                <li>
                  <span id="approved"></span>
                  <p>Elsebio de azevedo</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="not-approved"></span>
                  <p>Carlos Fernandes</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="approved"></span>
                  <p>Andre silva Matos</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="not-approved"></span>
                  <p>Thiago goncalvez dias G</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="not-approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="not-approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span id="not-approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button id="client-details-btn">Detalhes</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
