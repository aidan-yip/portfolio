// copyright © Aidan Yip, all rights reserved.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work_One from "./pages/Work_One";
import Work_Two from "./pages/Work_Two";
import Work_Three from "./pages/Work_Three";
import Page_Not_Found from "./pages/Page_Not_Found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work-one" element={<Work_One />} />
      <Route path="/work-two" element={<Work_Two />} />
      <Route path="/work-three" element={<Work_Three />} />
      <Route path="*" element={<Page_Not_Found />} />
    </Routes>
  );
}

export default App;
