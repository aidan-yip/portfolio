// copyright © Aidan Yip, all rights reserved.

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
import "./styles/_works.scss";
import "./styles/_design.scss";
import "./styles/_page_not_found.scss";

// components
import Header from "./components/Header";

// utility function to scroll to top of page
import Scroll_To_Section from "./components/Scroll_To_Section";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scroll_To_Section />
      <Header />
      <CursorifyProvider breakpoint={997}>
        <main id="maincontent">
          <App />
        </main>
      </CursorifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
