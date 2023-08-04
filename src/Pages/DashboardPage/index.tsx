import React from "react";
import logo from "../../assets/logo.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartBar,
  faUsers,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboard.css";
import brLocale from "@fullcalendar/core/locales/pt-br";
import interactionPlugin from "@fullcalendar/interaction";

const DashboardPage: React.FC = () => {
  return (
    <div className="wrapper">
      <nav className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo da Empresa" />
        </div>
        <h2>RJMICROCRÉDITO</h2>
        <ul className="menu">
          <li className="menu-item">
            <a href="../index.html">
              <FontAwesomeIcon icon={faChartBar} /> Dashboard
            </a>
          </li>
          <li className="menu-item">
            <a href="./Clientes/clientes.html">
              <FontAwesomeIcon icon={faUsers} /> Clientes
            </a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="header">
          <h1>SISTEMA GERENCIADOR PESSOA-CLIENTE</h1>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <h2>Total de Clientes</h2>
            <span>2500.</span>
          </div>
          <div className="card">
            <h2>Total de Clientes Não Aprovados</h2>
            <span>500.</span>
          </div>
          <div className="card">
            <h2>Total de Clientes Aprovados</h2>
            <span>2000</span>
          </div>

          {/* New card for pré-cadastros */}
          <div className="card">
            <h2>Total de Pré-cadastros</h2>
            <span>50</span>
          </div>
          <div className="search">
            <label htmlFor="searchInput">Pesquisar Cliente</label>
            <div className="input-icon-center">
              <input type="text" id="searchInput" name="searchInput" />
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div className="box-line">
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

            <div className="card clients">
              <h2>Últimos Clientes Cadastrados</h2>
              <ul className="client-list">
                <li>
                  <span className="approved"></span>
                  <p>Elsebio de azevedo</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="not-approved"></span>
                  <p>Carlos Fernandes</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="approved"></span>
                  <p>Andre silva Matos</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="not-approved"></span>
                  <p>Thiago goncalvez dias G</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="not-approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="not-approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button className="client-details-btn">Detalhes</button>
                </li>
                <li>
                  <span className="not-approved"></span>
                  <p>Miriam Cardoso machado</p>
                  <button className="client-details-btn">Detalhes</button>
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
