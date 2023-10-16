import styled from "styled-components";
//const primaryColor = "#3498DB";
const primaryColor = "#fa7dc3";
const secondaryColor = "#001F3F";
export const Wrapper = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.active ? "50px" : "230px")};
  transition: all 0.5s;
  padding: 20px;
  height: 120vh;
  color: ${primaryColor};
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

  h1 {
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;

  @media (max-width: 768px) {
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  color: ${secondaryColor};

  &:hover {
    background-color: ${secondaryColor};
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    h2 {
      color: #fff;
    }
  }

  h2 {
    color: ${primaryColor};
    font-size: 20px;
    font-weight: bold;
  }

  span {
    color: ${secondaryColor};

    margin-bottom: 15px;
    line-height: 1.6;
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 250px;
    align-items: center;
    text-align: center;
    height: 100px;
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
  }
`;

export const ClientCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
  }

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  span {
    color: red;
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

export const BoxLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
  }
`;
export const FullCalendarWrapper = styled.div`
  flex: 2.35;
  height: 700px;
  z-index: 0;
  .fc {
    z-index: -1;
    border-radius: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    padding: 20px;
    button {
      background-color: ${secondaryColor};
      z-index: 0;

      &:hover {
        background-color: ${primaryColor};
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const IconStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => props.color || "green"};
`;

export const NotApprovedIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: red;
`;

export const preCadIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: yellow;
`;

export const preAprovedIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #5857;
`;

export const ClientName = styled.p`
  margin-bottom: 0;
  line-height: 1.6;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
