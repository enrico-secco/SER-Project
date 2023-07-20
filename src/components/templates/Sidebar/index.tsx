import React, { PropsWithChildren, useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import {
  Container,
  Content,
  ContentChildren,
  Link,
  Navbar,
  NavbarItem,
  NavbarList,
  ToggleContent,
} from "./styles";
import { sidebarMenus } from "./settings";
import { useLocation } from "react-router-dom";

export const Sidebar = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    // <Container>
    //   <Content isOpenSidebar={isOpenSidebar}>
    //     <ToggleContent onClick={() => setIsOpenSidebar((older) => !older)}>
    //       <Icon name="menu" size="xlg" />
    //     </ToggleContent>
    //     <Navbar>
    //       <NavbarList>
    //         {sidebarMenus.map((menu) => (
    //           <Link
    //             key={menu.id}
    //             to={menu.path ?? ""}
    //             isActive={pathname.includes(menu.path ?? "")}
    //             isOpenSidebar={isOpenSidebar}
    //           >
    //             <Icon name={menu.icon} size="lg" />
    //             {isOpenSidebar && menu.label}
    //           </Link>
    //         ))}
    //       </NavbarList>
    //     </Navbar>
    //   </Content>
    //   <ContentChildren isOpenSidebar={isOpenSidebar}>
    //     {children}
    //   </ContentChildren>
    // </Container>
    <Container>
      <Content isOpenSidebar={isOpenSidebar}>
        <ToggleContent onClick={() => setIsOpenSidebar((old) => !old)}>
          <Icon name="menu" size="xlg" />
        </ToggleContent>
        <Navbar>
          <NavbarList>
            {sidebarMenus.map((menu) => (
              <Link
                key={menu.id}
                isActive={pathname.includes(menu.path ?? "")}
                isOpenSidebar={isOpenSidebar}
                to={menu.path ?? ""}
              >
                <Icon name={menu.icon} size="lg" />
                {isOpenSidebar && menu.label}
              </Link>
            ))}
          </NavbarList>
          <NavbarItem>logout</NavbarItem>
        </Navbar>
      </Content>
      <ContentChildren isOpenSidebar={isOpenSidebar}>
        {children}
      </ContentChildren>
    </Container>
  );
};
