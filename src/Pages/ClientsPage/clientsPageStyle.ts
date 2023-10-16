import styled from "styled-components";
//const primaryColor = "#3498DB";
const primaryColor = "#fa7dc3";
const secondaryColor = "#001F3F";
interface SidebarProps {
  active: boolean;
  backgroundColor: string;  
}
export const Wrapper = styled.div`
  display: flex;
`;
export const Content = styled.div<SidebarProps>`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.active ? "50px" : "230px")};
  height: 120vh;
  transition: all 0.5s;
  font-family: "Philosopher", sans-serif;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    margin-left: 50px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column-reverse;
    gap: 10px;
  }
`;
export const HeaderTitle = styled.h1`
  color: ${secondaryColor};
  font-weight: bold;
  font-size: 24px;
`;
export const SearchFilterContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Search = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const SearchLabel = styled.label`
  font-weight: bold;
`;
export const SearchInput = styled.input`
  max-width: 300px;
  padding: 8px;
  border: 1px solid ${secondaryColor};
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s;
  &:focus {
    border-color: ${primaryColor};
  }
`;
export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const FilterLabel = styled.label`
  color: ${primaryColor};

  font-weight: bold;
`;
export const FilterSelect = styled.select`
  max-width: 200px;
  padding: 8px;
  border: 1px solid ${secondaryColor};
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s;
  &:focus {
    border-color: ${primaryColor};
  }
`;
export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;
export const AddClientButton = styled.button`
  display: flex;
  margin-top: 10px;
  background-color: ${(props) => props.backgroundColor || primaryColor};
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: darken(${primaryColor}, 10%);
    transform: scale(1.05);
  }
`;

export const InputExport = styled.input<SidebarProps>`
  display: flex;
  margin-top: 10px;
  background-color: ${(props) => props.backgroundColor || primaryColor};
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: darken(${primaryColor}, 10%);
    transform: scale(1.05);
  }
`;
export const ActionButton = styled.button`
  background-color: ${primaryColor};
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: darken(${primaryColor}, 10%);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const ClientActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const MiniCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MiniCardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${secondaryColor};
  margin-bottom: 5px;
`;

export const MiniCardValue = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${primaryColor};
`;

export const ReminderOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ClientList = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ClientListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ClientName = styled.span`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const DueDate = styled.span`
  font-size: 14px;
  color: #ffffff;
  margin-left: 10px;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: red;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: red;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
