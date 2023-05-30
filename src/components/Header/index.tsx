import { HeaderComponent, Navbar, ItemMenu } from "./styles";
import { useLocation } from "react-router-dom";
import logo from "@assets/logo.png";

const menus = [
  {
    id: 1,
    title: "HOME",
    path: "/home",
  },
  {
    id: 2,
    title: "PRESTADORES",
    path: "/providers",
  },
];

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <HeaderComponent>
        <img src={logo} />
        <Navbar>
          <ul>
            {menus.map((menu) => (
              <ItemMenu
                to={menu.path}
                key={menu.id}
                $isActive={pathname.includes(menu.path)}
              >
                {menu.title}
              </ItemMenu>
            ))}
          </ul>
        </Navbar>
      </HeaderComponent>
    </div>
  );
};
