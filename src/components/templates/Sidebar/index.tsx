import React, { PropsWithChildren } from "react";
import { Icon } from "@/components/atoms/Icon";
import {
  Container,
  Content,
  ContentChilder,
  Navbar,
  NavbarItem,
  NavbarList,
  ToggleContent,
} from "./styles";
import { sidebarMenus } from "./settings";

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Content>
        <ToggleContent>
          <Icon name="menu" size="xlg" />
        </ToggleContent>
        <Navbar>
          <NavbarList>
            {sidebarMenus.map((menu) => (
              <NavbarItem key={menu.id}>
                <Icon name={menu.icon} size="lg" />
                {menu.label}
              </NavbarItem>
            ))}
          </NavbarList>
        </Navbar>
      </Content>
      <ContentChilder>{children}</ContentChilder>
    </Container>
  );
};
