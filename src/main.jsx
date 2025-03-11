import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// cursorify
import { CursorifyProvider } from "@cursorify/react";

// scss
import "./index.scss";
import "./styles/_normalize_v2.scss";

// pages scss
import "./pages/_home.scss";
import "./pages/_about.scss";

// components scss
import "./styles/_header.scss";

// components
import Header from "./components/Header";

// utility function to scroll to top of page
import Scroll_To_Section from "./components/Scroll_To_Section";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scroll_To_Section />
      <Header />
      <CursorifyProvider>
        <main id="maincontent">
          <App />
        </main>
      </CursorifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
