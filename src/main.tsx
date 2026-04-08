import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WavvyRoutes from "./WavvyRoutes";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <WavvyRoutes />
    </Provider>
  </StrictMode>,
);
