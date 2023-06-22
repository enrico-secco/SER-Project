import {
  Routes as RoutesDOM,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Providers } from "@pages/private/Providers";
import { Layout } from "../components/Layout";
import { CreateProvider } from "@pages/private/CreateProvider";
import { SignIn } from "@/pages/public/SignIn";
import { useEffect } from "react";

export const Routes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <RoutesDOM>
      {/* {Public} */}
      <Route path="/auth">
        <Route path="sign-in" element={<SignIn />}></Route>
        {/* <Route path="*" element={<Navigate to="/auth/sign-in" />}></Route> */}
      </Route>

      {/* {Private} */}
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<h1>Home</h1>}></Route>
        <Route path="providers" element={<Providers />}></Route>
        <Route
          path="providers/:id_provider"
          element={<CreateProvider />}
        ></Route>
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Route>
    </RoutesDOM>
  );
};
