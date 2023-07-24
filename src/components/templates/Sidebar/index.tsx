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
import { Button } from "@/components/molecules/Buttons";
import { useAuth } from "@/stores/hook/useAuth";

export const Sidebar = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const { signOut } = useAuth();

  return (
    <Container>
      <Content isOpenSidebar={isOpenSidebar}>
        <ToggleContent onClick={() => setIsOpenSidebar((old) => !old)}>
          <Icon name="menu" size="xl" color="text" />
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
                <Icon name={menu.icon} size="lg" color="secondary" />
                {isOpenSidebar && menu.label}
              </Link>
            ))}
          </NavbarList>
          <NavbarItem>
            <Button.IconButton
              color="error"
              icon="logout"
              onClick={signOut}
              background="transparent"
              size="sm"
            />
          </NavbarItem>
        </Navbar>
      </Content>
      <ContentChildren isOpenSidebar={isOpenSidebar}>
        {children}
      </ContentChildren>
    </Container>
  );
};
