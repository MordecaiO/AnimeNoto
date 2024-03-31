import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4sy8w3ealzodpv4t.us.auth0.com"
      clientId="zY6SIWTn5duLPuKysTh8PAXkvNhRu6Hn"
      authorizationParams={{
        redirect_uri: "https://mordecaio.github.io/AnimeNoto/#/search",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
