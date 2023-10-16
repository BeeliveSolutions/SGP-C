import React, { useContext, useEffect, useState } from "react";
import {
  ActionButton,
  ActionButtons,
  AddClientButton,
  ClientList,
  ClientListItem,
  Content,
  Filter,
  FilterLabel,
  Header,
  HeaderButtons,
  MiniCard,
  MiniCardTitle,
  MiniCardValue,
  MiniCards,
  Search,
  SearchFilterContainer,
  SearchInput,
  Wrapper,
} from "../ClientsPage/clientsPageStyle";
import { toast, ToastContainer } from "react-toastify";
import api from "../../config/api";

import {
  EventListItem,
  EventDescription,
  EventDates,
  EventActions,
} from "./EventStyle";
import TooBar from "../../components/TooBar";
import { SidebarContext } from "../../context/sidebarContext";
import ExportTable from "../../components/GetExportJson";
import { BsFiletypeCsv, BsPencilSquare, BsTrash } from "react-icons/bs";
import AddEventModal from "../../components/addEventModal";
import { format } from "date-fns";
import { Button } from "../../components/AddClient/AddClientStyle";

interface Event {
  id: number;
  description: string;
  start_date: string;
  end_date: string;
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Usando a interface Event
  const [searchInput, setSearchInput] = useState("");
  const { isMenuOpen } = useContext(SidebarContext);
  const [modelEvent, setModelEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Usando a interface Event

  useEffect(() => {
    const getEvents = async () => {
      await api
        .get("appointments")
        .then((response) => setEvents(response.data));
    };

    getEvents();
  }, [modelEvent]);

  const handleCloseAddEventModal = () => {
    setModelEvent(false);
    setSelectedEvent("");
  };

  const handleEditEvent = (id: Event) => {
    setSelectedEvent(id);
    setModelEvent(true);
  };

  const handleDeleteEvent = async (event: Event) => {
    try {
      await api.delete(`appointments/${event.id}`);
      toast.success("Evento apagado com sucesso");
      const updatedEvents = events.filter((e) => e.id !== event.id);
      setEvents(updatedEvents);
    } catch (error) {
      toast.error("Erro ao apagar o evento");
    }
  };

  return (
    <Wrapper>
      {modelEvent && (
        <AddEventModal
          onClose={handleCloseAddEventModal}
          id_event={selectedEvent ? selectedEvent : null}
        />
      )}
      <TooBar />
      <Content active={isMenuOpen}>
        <Header>
          <SearchFilterContainer>
            <Search>
              <Filter>
                <FilterLabel htmlFor="searchInput">Evento</FilterLabel>
                <SearchInput
                  type="text"
                  id="searchInput"
                  placeholder="Digite o nome do evento..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Filter>
            </Search>
          </SearchFilterContainer>
          <MiniCards>
            <MiniCard>
              <MiniCardTitle>Total Eventos Cadastrados</MiniCardTitle>
              <MiniCardValue>{events.length}</MiniCardValue>
            </MiniCard>
          </MiniCards>
          <HeaderButtons>
            <AddClientButton
              onClick={() => {
                setModelEvent(true);
              }}
            >
              Adicionar Evento
            </AddClientButton>

            <AddClientButton
              backgroundColor="green"
              onClick={() => {
                toast.info("Exportando para EXCEL");
                ExportTable(events, "Eventos");
              }}
            >
              <BsFiletypeCsv size={25} /> Exportar para EXCEL
            </AddClientButton>
          </HeaderButtons>
        </Header>
        <ClientList>
          {events.map((event) => (
            <ClientListItem key={event.id}>
              <EventDescription>
                {event.description}
                <EventDates>
                  {`Data de Início: ${format(
                    new Date(event.start_date),
                    "dd/MM/yyyy"
                  )} - Termina em ${format(
                    new Date(event.end_date),
                    "dd/MM/yyyy"
                  )}`}
                </EventDates>
              </EventDescription>
              <ActionButtons>
                <ActionButton onClick={() => handleEditEvent(event.id)}>
                  <BsPencilSquare />
                  Editar Evento
                </ActionButton>
                <ActionButton onClick={() => handleDeleteEvent(event)}>
                  <BsTrash />
                  Apagar Evento
                </ActionButton>
              </ActionButtons>
            </ClientListItem>
          ))}
        </ClientList>
      </Content>
      <ToastContainer />
    </Wrapper>
  );
};

export default EventsPage;
