import styled from "styled-components";

export const EventListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EventDescription = styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`;

export const EventDates = styled.div`
  font-size: 14px;
  color: #555;
`;

export const EventActions = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;

    svg {
      margin-right: 5px;
    }
  }
`;
