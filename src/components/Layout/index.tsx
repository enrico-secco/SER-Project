import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "@components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
