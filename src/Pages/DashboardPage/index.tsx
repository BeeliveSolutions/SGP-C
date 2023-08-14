import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import brLocale from "@fullcalendar/core/locales/pt-br";
import interactionPlugin from "@fullcalendar/interaction";
import TooBar from "../../components/TooBar";
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
  ApprovedIcon,
  NotApprovedIcon,
  ClientName,
  FullCalendarWrapper,
} from "./dashboardStyle";

const DashboardPage: React.FC = () => {
  return (
    <Wrapper>
      <TooBar />
      <Content>
        <Header>
          <h1>SISTEMA GERENCIADOR PESSOA-CLIENTE</h1>
        </Header>
        <CardWrapper>
          <Card>
            <h2>Total de Clientes</h2>
            <span>2500.</span>
          </Card>
          <Card>
            <h2>Total de Clientes Não Aprovados</h2>
            <span>500.</span>
          </Card>
          <Card>
            <h2>Total de Clientes Aprovados</h2>
            <span>2000</span>
          </Card>
          <Card>
            <h2>Total de Pré-cadastros</h2>
            <span>50</span>
          </Card>
          <Search>
            <label htmlFor="searchInput">Pesquisar Cliente</label>
            <InputIconCenter>
              <input type="text" id="searchInput" name="searchInput" />
              <SearchIcon icon={faSearch} id="search-icon" />
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
                alert("Clicado em: " + info.startStr);
              }}
              eventBackgroundColor="#54354"
            />
          </FullCalendarWrapper>
          <ClientCard>
            <h2>Últimos Clientes Cadastrados</h2>
            <ClientList>
              <ClientItem>
                <ApprovedIcon />
                <ClientName>Elsebio de azevedo</ClientName>
                <ClientDetailsButton>Detalhes</ClientDetailsButton>
              </ClientItem>
              <ClientItem>
                <NotApprovedIcon />
                <ClientName>Carlos Fernandes</ClientName>
                <ClientDetailsButton>Detalhes</ClientDetailsButton>
              </ClientItem>
            </ClientList>
          </ClientCard>
        </BoxLine>
      </Content>
    </Wrapper>
  );
};

export default DashboardPage;
