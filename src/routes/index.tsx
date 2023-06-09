import {Routes as RoutesDOM, Route, Navigate} from "react-router-dom";
import { Providers } from "@pages/private/Providers";
import { Layout } from "../components/Layout";
import { CreateProvider } from "@pages/private/CreateProvider";

export const Routes = () => {
  return (
   
    <RoutesDOM>
      {/* {Public} */}
      <Route path="/auth">
        <Route path="sign-in" element={<h1>Sign in</h1>}></Route>
      </Route>

      {/* {Private} */}
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<h1>Home</h1>}></Route>
        <Route path="providers" element={<Providers />}></Route>
        <Route path="providers/:id_provider" element={<CreateProvider />}></Route>
        <Route path="*" element={<Navigate to={"/home"} />}/>
      </Route>
    </RoutesDOM>
  );
};