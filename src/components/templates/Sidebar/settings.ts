export type TMenu = {
  id: number;
  label: string;
  icon: string;
  path?: string;
  subMenu?: TMenu;
};

export const sidebarMenus: TMenu[] = [
  {
    id: 1,
    label: "Home",
    icon: "home",
    path: "/home",
  },
  {
    id: 2,
    label: "Prestadores",
    icon: "person",
    path: "/providers",
  },
];
