import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { useEffect } from "react";

export const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('TOKEN');
  useEffect(() => {
    if (!token) {
      navigate('/auth/sign-in')
    }
  }, [token]); 

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
