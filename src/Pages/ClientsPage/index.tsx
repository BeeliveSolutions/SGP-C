import React, { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  Content,
  Header,
  SearchFilterContainer,
  Search,
  SearchInput,
  Filter,
  FilterLabel,
  FilterSelect,
  AddClientButton,
  MiniCards,
  MiniCard,
  MiniCardTitle,
  MiniCardValue,
  ActionButtons,
  ClientInfo,
  ClientList,
  ClientListItem,
  ClientName,
  StatusDot,
  DueDate,
  HeaderButtons,
  ActionButton,
} from "./clientsPageStyle"; // Importe os componentes estilizados do seu arquivo StyledComponents.ts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddClientModal from "../../components/AddClient";
import ClientDetailsModal from "../../components/ClientDetails";
import ChangeStatusModal from "../../components/ChangeStatus";
import ModalSendReminder from "../../components/SendReminderModal";
import Toolbar from "../../components/TooBar";
import api from "../../config/api";
import CpfCheckengModal from "../../components/CpfCheckend";
import { SidebarContext } from "../../context/sidebarContext";
import { BsFiletypeCsv } from "react-icons/bs";
import ExportTable from "../../components/GetExportJson";
const ClientesPage: React.FC = () => {
  const [searchInput, setSearchInput] = useState(null || "");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedLoanFilter, setSelectedLoanFilter] = useState("all");
  const [filteredClients, setFilteredClients] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [hasUpdated, setHasUpdated] = useState(false);
  const [showModalClientDetails, setShowModalClientDetails] = useState(false);
  const [showModalChangeStatus, setShowModalChangeStatus] = useState(false);
  const [showModalSendReminder, setShowModalSendReminder] = useState(false);
  const [showModalCpfCheckeng, setShowModalCpfCheckeng] = useState(false);
  const [clients, setClients] = useState([]);
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalClientesNaoAprovados, setTotalClientesNaoAprovados] = useState(0);
  const [totalClientesAprovados, setTotalClientesAprovados] = useState(0);
  const [totalPreCadastros, setTotalPreCadastros] = useState(0);
  const [totalPreAprovados, setTotalPreAprovados] = useState(0);
  const [totalCadastrado, setTotalCadastrado] = useState(0);
  const [totalEmprestimos, setTotalEmprestimos] = useState(0);
  const { isMenuOpen, setIsMenuOpen } = useContext(SidebarContext);

  const handleCloseModal = () => {
    setShowModal(false);
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
  const handleCloseModalDetailsClient = () => {
    setShowModalClientDetails(false);
  };
  const handleCloseModalChangeStatus = () => {
    setShowModalChangeStatus(false);
  };
  const handleCloseModalSendReminder = () => {
    setShowModalSendReminder(false);
  };
  const handleCloseModalCpfCheckeng = () => {
    setShowModalCpfCheckeng(false);
  };
  const formatIsoDateForInput = (isoDate: string) => {
    const dateObject = new Date(isoDate);
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const year = dateObject.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const handleFilterClick = async () => {
    try {
      const response = await api.get(`clients/all/filter/`, {
        params: {
          searchInput,
          selectedFilter,
          selectedLoanFilter,
        },
      });
      setFilteredClients(response.data);
    } catch (error) {
      console.error("Erro ao filtrar clientes:", error);
    }
  };
  const fetchDataStatus = async () => {
    api.get("/clients/all/status-totals").then((response) => {
      const {
        "pre-cadastro": preCadastroCount,
        "pre-aprovado": preAprovadoCount,
        cadastrado: cadastrado,
        aprovado: aprovadoCount,
        rejeitado: rejeitadoCount,
        total_emprestimo: totalEmprestimos,
      } = response.data;

      setTotalCadastrado(cadastrado);
      setTotalPreCadastros(preCadastroCount);
      setTotalPreAprovados(preAprovadoCount);
      setTotalEmprestimos(totalEmprestimos);
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
  useEffect(() => {
    const getClients = async () => {
      await api.get("clients").then((response) => setClients(response.data));
    };

    getClients();
    fetchDataStatus();
    setHasUpdated(false);
  }, [
    showModal,
    AddClientModal,
    showModalClientDetails,
    showModalChangeStatus,
    showModalSendReminder,
    hasUpdated,
  ]);

  return (
    <Wrapper>
      {showModal && <AddClientModal onClose={handleCloseModal} />}
      <Toolbar />
      {showModalClientDetails && (
        <ClientDetailsModal
          id={selectedClientId}
          onClose={handleCloseModalDetailsClient}
        />
      )}
      {showModalChangeStatus && (
        <ChangeStatusModal
          id={selectedClientId}
          onClose={handleCloseModalChangeStatus}
        />
      )}
      {showModalSendReminder && (
        <ModalSendReminder
          selectedClientId={selectedClientId}
          onClose={handleCloseModalSendReminder}
        />
      )}
      {showModalCpfCheckeng && (
        <CpfCheckengModal
          id={selectedClientId}
          onClose={handleCloseModalCpfCheckeng}
        />
      )}
      <Content active={isMenuOpen}>
        <Header>
          <SearchFilterContainer>
            <Search>
              <Filter>
                <FilterLabel htmlFor="searchInput">Cliente:</FilterLabel>
                <SearchInput
                  type="text"
                  id="searchInput"
                  placeholder="Digite o nome do cliente..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Filter>

              <Filter>
                <FilterLabel htmlFor="filterSelect">Status:</FilterLabel>
                <FilterSelect
                  id="filterSelect"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="all">Todos</option>
                  <option value="pre-cadastro">Pré-cadastro</option>
                  <option value="cadastrado">Cadastrado</option>
                  <option value="pre-aprovado">Pré-aprovado</option>
                  <option value="aprovado">Aprovado</option>
                  <option value="rejeitado">Não Aprovado</option>
                </FilterSelect>
              </Filter>
              <Filter>
                <FilterLabel htmlFor="loanFilter">
                  Faixa de Empréstimo:
                </FilterLabel>
                <FilterSelect
                  id="loanFilter"
                  value={selectedLoanFilter}
                  onChange={(e) => setSelectedLoanFilter(e.target.value)}
                >
                  <option value="all">Todos</option>
                  <option value="0-5000">R$0 - R$5.000</option>
                  <option value="5000-10000">R$5.000 - R$10.000</option>
                  <option value="10000-15000">R$10.000 - R$15.000</option>
                </FilterSelect>
              </Filter>
              <AddClientButton onClick={handleFilterClick}>
                Filtrar
              </AddClientButton>
            </Search>
          </SearchFilterContainer>
          <MiniCards>
            <MiniCard>
              <MiniCardTitle>Total de Clientes</MiniCardTitle>
              <MiniCardValue>{totalClientes}</MiniCardValue>
            </MiniCard>
            <MiniCard>
              <MiniCardTitle>Aprovados</MiniCardTitle>
              <MiniCardValue>{totalClientesAprovados}</MiniCardValue>
            </MiniCard>
            <MiniCard>
              <MiniCardTitle>Cadastrados</MiniCardTitle>
              <MiniCardValue>{totalCadastrado}</MiniCardValue>
            </MiniCard>
            <MiniCard>
              <MiniCardTitle>Não Aprovados</MiniCardTitle>
              <MiniCardValue>{totalClientesNaoAprovados}</MiniCardValue>
            </MiniCard>
            <MiniCard>
              <MiniCardTitle>Pré Cadastros</MiniCardTitle>
              <MiniCardValue>{totalPreCadastros}</MiniCardValue>
            </MiniCard>
            <MiniCard>
              <MiniCardTitle>Pré Aprovados</MiniCardTitle>
              <MiniCardValue>{totalPreAprovados}</MiniCardValue>
            </MiniCard>
            <MiniCard>
              <MiniCardTitle>Total Empréstimos</MiniCardTitle>
              <MiniCardValue>{totalEmprestimos}</MiniCardValue>
            </MiniCard>
          </MiniCards>
          <HeaderButtons>
            <AddClientButton
              onClick={() => {
                setShowModal(true);
              }}
            >
              Adicionar Cliente
            </AddClientButton>
            <AddClientButton
              onClick={async () => {
                await api
                  .put("clients/all/update-due-dates")
                  .then((response) => {
                    toast.success(
                      `Os Vencimentos dos clientes, foram atualizados com sucesso!`
                    );
                  })
                  .catch((error) => {
                    toast.error(
                      "Algum erro aconteceu, contate o desenvolvedor!"
                    );
                  });
                setHasUpdated(true);
              }}
            >
              Atualizar Clientes
            </AddClientButton>
            <AddClientButton
              backgroundColor="green"
              onClick={() => {
                toast.info("Exportando para EXCEL");

                ExportTable(clients, "clientes");
              }}
            >
              <BsFiletypeCsv size={25} /> Exportar para EXCEL
            </AddClientButton>
          </HeaderButtons>
        </Header>
        <ClientList>
          {filteredClients.length > 0 ? (
            <h1 style={{ textAlign: "center", color: "#f56609" }}>
              Clientes filtrados!
            </h1>
          ) : (
            ""
          )}
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <ClientListItem>
                <ClientInfo>
                  <StatusDot color={setIconColorStatus(client.status)} />
                  <ClientName>{client.name}</ClientName>
                  <DueDate>
                    {client.loan_due_date
                      ? formatIsoDateForInput(client.loan_due_date)
                      : "Sem data de vencimento"}
                  </DueDate>
                </ClientInfo>
                <ActionButtons>
                  <ActionButton
                    onClick={() => {
                      setShowModalSendReminder(true);
                      setSelectedClientId(client.id);
                    }}
                  >
                    Enviar Lembrete
                  </ActionButton>
                  <ActionButton
                    onClick={() => {
                      setSelectedClientId(client.id);
                      setShowModalChangeStatus(true);
                    }}
                  >
                    Mudar Status
                  </ActionButton>
                  <ActionButton
                    onClick={() => {
                      setShowModalClientDetails(true);
                      setSelectedClientId(client.id);
                    }}
                  >
                    Ver Detalhes
                  </ActionButton>
                  <ActionButton
                    onClick={async () => {
                      api
                        .put(`clients/${client.id}/update-due-date`)
                        .then((response) => {
                          toast.success(
                            `Vencimento do cliente:  ${client.name},
                      foi atualizada com sucesso`
                          );
                        })
                        .catch((error) => {
                          toast.error(
                            "Algum erro aconteceu, contate o desenvolvedor!"
                          );
                        });
                      setHasUpdated(true);
                    }}
                  >
                    Atualizar Vencimento
                  </ActionButton>
                </ActionButtons>
              </ClientListItem>
            ))
          ) : clients.length > 0 ? (
            clients.map((client) => (
              <ClientListItem>
                <ClientInfo>
                  <StatusDot color={setIconColorStatus(client.status)} />
                  <ClientName>{client.name}</ClientName>
                  <DueDate>
                    {client.loan_due_date
                      ? formatIsoDateForInput(client.loan_due_date)
                      : "Sem data de vencimento"}
                  </DueDate>
                </ClientInfo>
                <ActionButtons>
                  <ActionButton
                    onClick={() => {
                      setShowModalCpfCheckeng(true);
                      setSelectedClientId(client.id);
                    }}
                  >
                    Consultar CPF Automatico
                  </ActionButton>

                  <ActionButton
                    onClick={() => {
                      setShowModalSendReminder(true);
                      setSelectedClientId(client.id);
                    }}
                  >
                    Enviar Lembrete
                  </ActionButton>
                  <ActionButton
                    onClick={() => {
                      setSelectedClientId(client.id);
                      setShowModalChangeStatus(true);
                    }}
                  >
                    Mudar Status
                  </ActionButton>
                  <ActionButton
                    onClick={() => {
                      setShowModalClientDetails(true);
                      setSelectedClientId(client.id);
                    }}
                  >
                    Ver Detalhes
                  </ActionButton>
                  <ActionButton
                    onClick={async () => {
                      api
                        .put(`clients/${client.id}/update-due-date`)
                        .then((response) => {
                          toast.success(
                            `Vencimento do cliente:  ${client.name},
                      foi atualizada com sucesso`
                          );
                        })
                        .catch((error) => {
                          toast.error(
                            "Algum erro aconteceu, contate o desenvolvedor!"
                          );
                        });
                      setHasUpdated(true);
                    }}
                  >
                    Atualizar Vencimento
                  </ActionButton>
                </ActionButtons>
              </ClientListItem>
            ))
          ) : (
            <h1 style={{ textAlign: "center", color: "#f56609" }}>
              Não há Clientes Cadastrados!
            </h1>
          )}
        </ClientList>
      </Content>
      <ToastContainer />
    </Wrapper>
  );
};

export default ClientesPage;
