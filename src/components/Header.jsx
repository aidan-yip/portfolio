// copyright © Aidan Yip, all rights reserved.

import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleMenu() {
    const nav = document.querySelector("nav");
    const menuBtn = document.querySelector("#menu_button");
    const GlassContent = document.querySelector(".GlassContent");
    if (menuOpen) {
      if (nav && menuBtn) {
        nav.style.transform = "translateY(-100%)";
        nav.style.opacity = "0";
        nav.style.pointerEvents = "none";
        menuBtn.style.transform = "rotate(0deg)";
        menuBtn.style.color = "#ffffff";
        menuBtn.style.backgroundColor = "#15333ec8";
        menuBtn.style.boxShadow =
          "inset 0.8px 0.8px 0px #afe1efec, inset -0.8px -0.8px 0px #afe1efec";
        menuBtn.style.top = "0.2rem";
        menuBtn.style.right = "0.7rem";
      }
      setTimeout(() => {
        nav.style.height = "0";
        GlassContent.style.display = "none";
        GlassContent.style.pointerEvents = "none";
      }, 300);
      setMenuOpen(false);
    } else {
      if (nav && menuBtn) {
        nav.style.transform = "translateY(0)";
        nav.style.opacity = "1";
        nav.style.pointerEvents = "all";
        nav.style.display = "flex";
        nav.style.height = "auto";
        GlassContent.style.display = "flex";
        GlassContent.style.pointerEvents = "all";
        menuBtn.style.transform = "rotate(45deg)";
        menuBtn.style.color = "red";
        menuBtn.style.backgroundColor = "#3e1515c8";
        menuBtn.style.boxShadow =
          "inset 0.8px 0px 0px #efafafec, inset -0.8px -0px 0px #efafafec";
        menuBtn.style.top = "1rem";
        menuBtn.style.right = "1.7rem";
      }
      setMenuOpen(true);
    }
  }

  // Mobile browser check for menu toggle
  function HandleDeviceType() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      ToggleMenu();
      console.log("mobile browser");
    } else {
      console.log("desktop browser");
    }
  }

  return (
    <header>
      <a href="#maincontent" id="skip_to_main">
        Skip to main content
      </a>
      <Link
        to="/#hero_section"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          HandleDeviceType();
        }}
      >
        <img src="/icons/aidan_logo_clearv7.png" id="site_logo"></img>
      </Link>
      <button id="menu_button" aria-label="Menu" onClick={ToggleMenu}>
        {menuOpen ? "+" : "="}
      </button>
      <nav className="GlassContainer" aria-expanded={menuOpen}>
        <div className="GlassContent">
          <li>
            <Link
              to="/"
              className="navlink nav_icon_flex"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                HandleDeviceType();
              }}
            >
              <img src="/icons/house.png" className="nav_icon"></img>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#works_section"
              className="navlink nav_icon_flex"
              onClick={HandleDeviceType}
            >
              <img
                src="/icons/works.png"
                className="nav_icon icon_margin"
              ></img>
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/#design_section"
              className="navlink nav_icon_flex"
              onClick={HandleDeviceType}
            >
              <img
                src="/icons/design.png"
                className="nav_icon icon_margin"
              ></img>
              Design
            </Link>
          </li>
          <li>
            <Link
              to="/about/#maincontent"
              className="navlink nav_icon_flex"
              onClick={HandleDeviceType}
            >
              <img src="/icons/about.png" className="nav_icon"></img>
              About
            </Link>
          </li>
        </div>
        <div className="GlassMaterial">
          <div className="GlassEdgeReflection"></div>
          <div className="GlassEmbossReflection"></div>
          <div className="GlassRefraction"></div>
          <div className="GlassBlur"></div>
          <div className="BlendLayers"></div>
          <div className="BlendEdge"></div>
          <div className="Highlight"></div>
          <div className="Brightness"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
