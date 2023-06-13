import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./stores/hook/useAuth";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
