import { HeaderComponent, Navbar, ItemMenu } from "./styles";
import { useLocation } from "react-router-dom";
import logo from "@assets/logo.png";
import { useAuth } from "@/stores/hook/useAuth";

export const Header = () => {
  
  const { pathname } = useLocation();
  const { signOut } = useAuth();
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
    {
      id: 3,
      title: "SAIR DA APLICACAO",
      action: () => signOut(),
    },
  ];

  return (
    <div>
      <HeaderComponent>
        <img src={logo} />
        <Navbar>
          <ul>
            {menus.map((menu) =>
              menu.path ? (
                <ItemMenu
                  to={menu.path}
                  key={menu.id}
                  $isActive={pathname.includes(menu.path)}
                >
                  {menu.title}
                </ItemMenu>
              ) : (
                <button onClick={menu.action}>{menu.title}</button>
              )
            )}
          </ul>
        </Navbar>
      </HeaderComponent>
    </div>
  );
};
