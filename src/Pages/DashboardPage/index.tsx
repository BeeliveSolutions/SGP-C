import React, { useContext, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import brLocale from "@fullcalendar/core/locales/pt-br";
import interactionPlugin from "@fullcalendar/interaction";
import { AddClientButton } from "../../Pages/ClientsPage/clientsPageStyle";
import AddClientModal from "../../components/AddClient";
import TooBar from "../../components/TooBar";
import AddEventModal from "../../components/addEventModal";
import {
  Wrapper,
  Content,
  Header,
  CardWrapper,
  Card,
  Search,
  InputIconCenter,
  ClientCard,
  ClientList,
  ClientItem,
  ClientDetailsButton,
  SearchIcon,
  BoxLine,
  IconStatus,
  ClientName,
  FullCalendarWrapper,
} from "./dashboardStyle";
import ClientDetailsModal from "../../components/ClientDetails";
import api from "../../config/api";
import { ToastContainer } from "react-toastify";
import { SidebarContext } from "../../context/sidebarContext";

const DashboardPage: React.FC = () => {
  const [lastClients, setLastClients] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState();
  const [searchInput, setSearchInput] = useState();
  const [hasUpdated, setHasUpdated] = useState(false);
  const [filteredClients, setFilteredClients] = useState([]);
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalClientesNaoAprovados, setTotalClientesNaoAprovados] = useState(0);
  const [totalClientesAprovados, setTotalClientesAprovados] = useState(0);
  const [totalPreCadastros, setTotalPreCadastros] = useState(0);
  const [showModalClientDetails, setShowModalClientDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para armazenar a data selecionada no calendário
  const { isMenuOpen, setIsMenuOpen } = useContext(SidebarContext);
  const handleOpenAddEventModal = (info) => {
    if (info.event) {
      setSelectedEvent(info.event.id);
      setShowAddEventModal(true);
    }

    setShowAddEventModal(true);
  };
  const handleCloseAddEventModal = () => {
    setShowAddEventModal(false);
    setSelectedEvent(null);
    setSelectedDate(null);
  };
  const handleCloseModalDetailsClient = () => {
    setShowModalClientDetails(false);
  };
  const [ShowModalAddClient, setShowModalAddClient] = useState(false);
  const handleCloseModal = () => {
    setShowModalAddClient(false);
  };
  function setIconColorStatus(status: string) {
    switch (status) {
      case "aprovado":
        return "#00cc00";
      case "pre-aprovado":
        return "#ffcc00";
      case "rejeitado":
        return "#ff3300";
      case "pre-cadastro":
        return "#ca660388";
      default:
        return "#000000";
    }
  }
  const fetchDataEvents = async () => {
    await api.get("appointments").then((response) => {
      setEvents(response.data);
    });
  };
  const handleFilterClick = async () => {
    try {
      const response = await api.get(`clients/all/filter/`, {
        params: {
          searchInput,
          selectedFilter: "all",
          selectedLoanFilter: "all",
        },
      });
      console.log(response.data);
      setFilteredClients(response.data);
      setHasUpdated(true);
      setHasUpdated(false);
    } catch (error) {
      console.error("Erro ao filtrar clientes:", error);
    }
  };
  useEffect(() => {
    const fetchDataStatus = async () => {
      console.log("funcão fetchDataStatus");
      api.get("/clients/all/status-totals").then((response) => {
        const {
          "pre-cadastro": preCadastroCount,
          "pre-aprovado": preAprovadoCount,
          cadastrado: cadastrado,
          aprovado: aprovadoCount,
          rejeitado: rejeitadoCount,
        } = response.data;

        setTotalPreCadastros(preCadastroCount);
        setTotalClientes(
          preCadastroCount +
            cadastrado +
            rejeitadoCount +
            preAprovadoCount +
            aprovadoCount
        );
        setTotalClientesNaoAprovados(rejeitadoCount);
        setTotalClientesAprovados(aprovadoCount);
      });
    };
    const fetchDataLastClients = async () => {
      console.log("funcão fetchLastClients");

      await api.get("/clients/all/LastRegister").then((response) => {
        setLastClients(response.data);
      });
    };
    fetchDataEvents();
    fetchDataStatus();
    fetchDataLastClients();
  }, [showModalClientDetails, showAddEventModal, ShowModalAddClient]);
  return (
    <Wrapper>
      {ShowModalAddClient && <AddClientModal onClose={handleCloseModal} />}
      {showModalClientDetails && (
        <ClientDetailsModal
          id={selectedClientId}
          onClose={handleCloseModalDetailsClient}
        />
      )}
      <TooBar />
      <Content active={isMenuOpen}>
        <Header>
          <h1>SISTEMA GERENCIADOR PESSOA-CLIENTE</h1>
        </Header>
        <CardWrapper>
          <Card>
            <h2>Total de Clientes</h2>
            <span> {totalClientes}</span>
          </Card>
          <Card>
            <h2>Total de Clientes Não Aprovados</h2>
            <span>{totalClientesNaoAprovados}</span>
          </Card>
          <Card>
            <h2>Total de Clientes Aprovados</h2>
            <span>{totalClientesAprovados}</span>
          </Card>
          <Card>
            <h2>Total de Pré-cadastros</h2>
            <span>{totalPreCadastros}</span>
          </Card>
          <Search>
            <label htmlFor="searchInput">Pesquisar Cliente</label>
            <InputIconCenter>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                onKeyDown={handleFilterClick}
                id="searchInput"
                name="searchInput"
              />
            </InputIconCenter>
          </Search>
        </CardWrapper>
        <BoxLine>
          <FullCalendarWrapper>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              locale={brLocale}
              selectable={true}
              select={(info) => {
                handleOpenAddEventModal(info);
                setSelectedDate(info.startStr);
              }}
              eventClick={(info) => {
                handleOpenAddEventModal(info);
              }}
              events={events.map((event) => ({
                title: event.description,
                start: event.start_date,
                end: event.end_date,
                id: event.id,
              }))}
            />
          </FullCalendarWrapper>

          {showAddEventModal && (
            <AddEventModal
              onClose={handleCloseAddEventModal}
              selectedDate={selectedDate}
              id_event={selectedEvent ? selectedEvent : null}
            />
          )}
          <ClientCard>
            <h2>
              {filteredClients
                ? "Últimos Clientes Cadastrados"
                : "Cliente filtrado"}
            </h2>
            <ClientList>
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <ClientItem key={client.id}>
                    <IconStatus color={setIconColorStatus(client.status)} />
                    <ClientName>{client.name}</ClientName>
                    <ClientDetailsButton
                      onClick={() => {
                        setSelectedClientId(client.id);
                        setShowModalClientDetails(true);
                      }}
                    >
                      Detalhes
                    </ClientDetailsButton>
                  </ClientItem>
                ))
              ) : lastClients.length > 0 ? (
                lastClients.map((client) => (
                  <ClientItem key={client.id}>
                    <IconStatus color={setIconColorStatus(client.status)} />
                    <ClientName>{client.name}</ClientName>
                    <ClientDetailsButton
                      onClick={() => {
                        setSelectedClientId(client.id);
                        setShowModalClientDetails(true);
                      }}
                    >
                      Detalhes
                    </ClientDetailsButton>
                  </ClientItem>
                ))
              ) : (
                <h3 style={{ textAlign: "center", color: "#f56609" }}>
                  Não há Clientes Cadastrados!
                </h3>
              )}
            </ClientList>
            <AddClientButton
              onClick={() => {
                setShowModalAddClient(true);
              }}
            >
              Adicionar Cliente
            </AddClientButton>
          </ClientCard>
        </BoxLine>
      </Content>
      <ToastContainer />
    </Wrapper>
  );
};

export default DashboardPage;
