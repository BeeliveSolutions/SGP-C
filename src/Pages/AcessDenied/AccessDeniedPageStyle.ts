import styled from "styled-components";

export const AccessDeniedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo */
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #1b1b69; /* Cor primária */
  margin-bottom: 10px;
`;

export const Message = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
  max-width: 400px;
`;

export const StyledLink = styled.a`
  font-size: 16px;
  color: #f56609; /* Cor secundária */
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #e85a00; /* Tom mais escuro da cor secundária */
  }
`;
