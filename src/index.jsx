import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/ChartContext";
import { ModalContextProvider } from "./context/ModalContext";

ReactDOM.render(
  <ContextProvider>
    <ModalContextProvider>
      <Router>
        <App />
      </Router>
    </ModalContextProvider>
  </ContextProvider>,
  document.getElementById("root")
);
