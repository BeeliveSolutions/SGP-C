import styled from "styled-components";
/* Cores */
const primaryColor = "#1b1b69";
const secondaryColor = "#f56609";

export const Sidebar = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: ${primaryColor};
  color: #fff;
  position: fixed;
  padding: 10px;

  h2 {
    font-weight: bold;
    color: ${secondaryColor};
  }
`;

export const Logo = styled.div`
  border-radius: 90%;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 180px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 15px;
`;

export const MenuItem = styled.li`
  width: 100%;
  list-style-type: none;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 12px;
  font-weight: bold;
  border-radius: 5px;
  font-size: 17px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${secondaryColor};
  }
`;
