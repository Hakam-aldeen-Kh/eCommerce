import { createRoot } from "react-dom/client";
//* Router
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@routes/AppRouter";
//* Redux Toolkit
import { Provider } from "react-redux";
import { store, persistor } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";
//* axios 
import "./services/axios-globale.js"
//* Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
