import React from "react";
import { Container, Item, Link } from "./styles";

type TMenu = {
  label: string;
  path?: string;
};

interface IBreadCrumbsProps {
  menus: TMenu[];
}

export const Breadcrumbs = ({ menus }: IBreadCrumbsProps) => {
  return (
    <Container>
      {menus.map((menu) =>
        menu.path ? (
          <Link to={menu.path} key={menu.label}>
            {menu.label}
          </Link>
        ) : (
          <Item key={menu.label}> {menu.label}</Item>
        )
      )}
    </Container>
  );
};
