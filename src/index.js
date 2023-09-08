import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DataContext, DataProvider } from "./DataContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { DataContext, DataProvider };

root.render(
  <StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </StrictMode>
);
