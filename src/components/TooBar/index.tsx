import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  Sidebar,
  Logo,
  LogoImage,
  Menu,
  MenuItem,
  MenuItemLink,
} from "./TooBarStyles";
import { useNavigate } from "react-router-dom";

const TooBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <Logo>
        <LogoImage src={logo} alt="Logo da Empresa" />
      </Logo>
      <h2>RJMICROCRÉDITO</h2>
      <Menu>
        <MenuItem>
          <MenuItemLink
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            <FontAwesomeIcon icon={faChartBar} /> Dashboard
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink
            onClick={() => {
              navigate("/Clients");
            }}
          >
            <FontAwesomeIcon icon={faUsers} /> Clientes
          </MenuItemLink>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default TooBar;
