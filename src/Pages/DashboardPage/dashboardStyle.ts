import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const primaryColor = "#1b1b69";

const secondaryColor = "#f56609";

export const Wrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 270px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    color: ${secondaryColor};
    font-size: 24px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  margin-bottom: 10px;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  padding: 20px;
  transition: all 0.2s ease;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${secondaryColor};
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    h2 {
      color: #fff;
    }
  }

  h2 {
    color: ${secondaryColor};
    font-size: 20px;
    font-weight: bold;
  }

  span {
    color: #000000;
    margin-bottom: 15px;
    line-height: 1.6;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 20px;
  position: relative;

  input[type="text"]:hover {
    background-color: ${secondaryColor};
    cursor: pointer;
    color: #fff;
  }

  input[type="text"] {
    transition: background-color 0.2s ease;
  }

  label {
    color: ${secondaryColor};
    font-weight: bold;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px 30px 10px 10px;
    border: 1px solid ${secondaryColor};
    border-radius: 5px;
    font-size: 16px;
    background-color: #fff;
  }
`;

export const InputIconCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  #search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    color: #ccc;
  }
`;

export const ClientCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
  }

  h2 {
    color: ${secondaryColor};
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const ClientList = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

export const ClientItem = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ClientDetailsButton = styled.button`
  background-color: ${secondaryColor};
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  /* Se você precisar adicionar estilos específicos ao ícone, faça isso aqui */
`;
export const BoxLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  gap: 25px;
`;
export const FullCalendarWrapper = styled.div`
  flex: 2.35;
  height: 700px;

  .fc {
    border-radius: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    padding: 20px;

    button {
      background-color: ${secondaryColor};

      &:hover {
        background-color: ${primaryColor};
      }
    }
  }
`;

export const ApprovedIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: green;
`;

export const NotApprovedIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: red;
`;

export const ClientName = styled.p`
  color: #000000;
  margin-bottom: 0;
  line-height: 1.6;
  font-size: 20px;
  font-weight: bold;
`;
