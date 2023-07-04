import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IToastProps {
  title: string;
  type: "success" | "error" | "warn" | "info";
  toastOptions?: any;
}

export interface IToastContext {
  addToast: (props: IToastProps) => void;
}

const toastContext = createContext<IToastContext>({} as IToastContext);

export const ToastProvider = ({ children }: React.PropsWithChildren) => {
  const addToast = ({ title, type, toastOptions }: IToastProps) => {
    // se: type === 'success'
    // isso: toast[props.type]
    // é igual a isso: toast.success
    toast[type](title, toastOptions);
  };

  return (
    <toastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer />
    </toastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(toastContext);
};
