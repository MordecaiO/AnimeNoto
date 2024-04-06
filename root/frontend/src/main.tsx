import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
      authorizationParams={{
        redirect_uri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
