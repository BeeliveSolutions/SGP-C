import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faUsers,
  faCalendarAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Sidebar,
  Logo,
  LogoImage,
  Menu,
  MenuItem,
  MenuItemLink,
  ButtonMobile,
  UserWrapper,
} from "./TooBarStyles";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../context/sidebarContext";
import api from "../../config/api";
const TooBar: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(SidebarContext);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  const getNameUser = async () => {
    const idUser = localStorage.getItem("idUser");

    api.get(`users/${idUser}`).then((response) => {
      setUserName(response.data.login);
    });
  };

  useEffect(() => {
    getNameUser();
  }, []);

  return (
    <Sidebar active={isMenuOpen}>
      <Logo active={isMenuOpen}>
        <LogoImage src={logo} alt="Logo da Empresa" />
      </Logo>
      <Menu active={isMenuOpen}>
        <MenuItem>
          <MenuItem>
            <MenuItemLink
              active={isMenuOpen}
              onClick={() => {
                navigate("/Dashboard");
              }}
            >
              <FontAwesomeIcon icon={faChartBar} />
              <span>Dashboard</span>
            </MenuItemLink>
          </MenuItem>
        </MenuItem>
        <MenuItem>
          <MenuItemLink
            active={isMenuOpen}
            onClick={() => {
              navigate("/Clients");
            }}
          >
            <FontAwesomeIcon icon={faUsers} />
            <span>Clientes</span>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink
            active={isMenuOpen}
            onClick={() => {
              navigate("/Events");
            }}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Eventos</span>
          </MenuItemLink>
        </MenuItem>
      </Menu>
      {isMenuOpen ? (
        <ButtonMobile
          onClick={() => {
            handleMenuToggle(false);
          }}
        >
          {" "}
          <BsFillArrowRightCircleFill size={35} />
        </ButtonMobile>
      ) : (
        <ButtonMobile
          onClick={() => {
            handleMenuToggle(true);
          }}
        >
          {" "}
          <BsFillArrowLeftCircleFill size={35} />
        </ButtonMobile>
      )}
      <UserWrapper active={isMenuOpen}>
        <FontAwesomeIcon icon={faUser} />{" "}
        <span>
          {" "}
          Usuario Logado: {userName ? userName : "Usuario não encontrado"}
        </span>
      </UserWrapper>
    </Sidebar>
  );
};

export default TooBar;
