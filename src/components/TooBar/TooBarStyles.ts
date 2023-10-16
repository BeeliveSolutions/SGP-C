import styled from "styled-components";

const primaryColor = "#001F3F";
//const secondaryColor = "#3498DB";
const secondaryColor = "#fa7dc3";
interface SidebarProps {
  active: boolean;
  backgrounColor: boolean;
}
export const Sidebar = styled.nav<SidebarProps>`
  width: ${(props) => (props.active ? "60px" : "230px")};
  height: 100vh;
  background-color: ${(props) =>
    props.backgrounColor ? primaryColor : secondaryColor};
  color: #fff;
  position: fixed;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  h2 {
    font-weight: bold;
    color: ${secondaryColor};
  }
  & > h2 {
    display: ${(props) => (props.active ? "none" : "block")};
  }

  @media (max-width: 768px) {
    width: 60px;
    & > h2 {
      display: none;
    }
  }
`;

export const Logo = styled.div<SidebarProps>`
  border-radius: ${(props) => (props.active ? "10%" : "90%")};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    border-radius: 10%;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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

export const ButtonMobile = styled.button<SidebarProps>`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.backgrounColor ? secondaryColor : primaryColor)};
  position: absolute;
  right: -20px;
  top: 50%;
`;
export const UserWrapper = styled.div<SidebarProps>`
  position: absolute;
  bottom: 40px;
  gap: 10px;
  font-size: 20px;
  color: ${(props) => (props.backgrounColor ? secondaryColor : primaryColor)};
  display: ${(props) => (props.active ? "none" : "flex")};
`;
export const MenuItemLink = styled.a<SidebarProps>`
  text-decoration: none;
  color: #fff;
  display: block;
  padding: ${(props) => (props.active ? "12px 12px" : "12px 45px")};
  font-weight: bold;
  border-radius: 5px;
  font-size: 17px;
  transition: background-color 0.5s ease;
  display: flex;
  gap: 10px;
  justify-content: center;
  &:hover {
    background-color: ${primaryColor};
  }
  & > span {
    display: ${(props) => (props.active ? "none" : "block")};
  }
  @media (max-width: 768px) {
    padding: 12px 12px;

    & > span {
      display: none;
    }
  }
`;
