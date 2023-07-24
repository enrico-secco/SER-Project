import styled from "styled-components";
import { Link as LinkDOM } from "react-router-dom";

interface ISidebarProps {
  isOpenSidebar: boolean;
}

interface ILinkProps extends ISidebarProps {
  isActive: boolean;
}

const WIDTH_SIDEBAR = {
  OPEN: "15%",
  CLOSED: "5rem",
};

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div<ISidebarProps>`
  height: 100vh;
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;

  ${({ isOpenSidebar }) => `
    width: ${WIDTH_SIDEBAR[isOpenSidebar ? "OPEN" : "CLOSED"]};
  `}
`;

export const ToggleContent = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  overflow-x: hidden;
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  width: 100%;
`;

export const Link = styled(LinkDOM)<ILinkProps>`
  display: flex;
  gap: 10px;
  padding: 0.5rem;
  width: 100%;
  text-decoration: none;

  ${({ isActive, isOpenSidebar }) => `
    color: ${isActive ? "#cc2255" : "#333"} !important;
    background-color: ${isActive ? "#cc22553b" : "#fff"};
    font-weight: ${isActive ? "bold" : "500"};   
  
    ${
      !isOpenSidebar &&
      `
      justify-content: center;
    `
    }
  `}
`;

export const ContentChildren = styled.div<ISidebarProps>`
  max-width: -webkit-fill-available;

  ${({ isOpenSidebar }) => `
    padding-left: ${WIDTH_SIDEBAR[isOpenSidebar ? "OPEN" : "CLOSED"]};
  `}
`;
