import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./styles.css";

const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
