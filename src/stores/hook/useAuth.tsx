import { login } from "@/services/api/login";
import { PropsWithChildren, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export interface ISignInProps {
  email: string;
  password: string;
}

interface IAuthContextProps {
  signIn(body: ISignInProps): Promise<void>;
  signOut(): void;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const signIn = async (body: ISignInProps) => {
    login(body)
      .then((res) => {
        localStorage.setItem("TOKEN", res.data.token);
        navigate('/home');
      })
      .catch((err) => console.log(err));
  };
  const signOut = () => {
    localStorage.clear();
    navigate('/auth/sign-in');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
