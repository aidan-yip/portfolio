// copyright © Aidan Yip, all rights reserved.

import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleMenu() {
    if (menuOpen) {
      const nav = document.querySelector("nav");
      const menuBtn = document.querySelector("#menu_button");
      if (nav && menuBtn) {
        nav.style.opacity = "0";
        nav.style.pointerEvents = "none";
        menuBtn.style.transform = "rotate(0deg)";
        menuBtn.style.color = "#ffffff";
        menuBtn.style.top = "0.2rem";
        menuBtn.style.right = "0.7rem";
      }
      setTimeout(() => {
        document.querySelector("nav").style.height = "0";
      }, 1000);
      setMenuOpen(false);
    } else {
      const nav = document.querySelector("nav");
      const menuBtn = document.querySelector("#menu_button");
      if (nav && menuBtn) {
        nav.style.opacity = "1";
        nav.style.pointerEvents = "all";
        nav.style.display = "flex";
        nav.style.height = "auto";
        menuBtn.style.transform = "rotate(45deg)";
        menuBtn.style.color = "red";
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
      <button id="menu_button" aria-label="Menu" onClick={ToggleMenu}>
        +
      </button>
      <nav aria-expanded={menuOpen}>
        <li>
          <Link
            to="/#hero_section"
            className="site_logo_link"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              HandleDeviceType();
            }}
          >
            <img
              src="/icons/aidan_logo_clear.svg"
              alt="Aidan's site logo"
              id="site_logo"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                HandleDeviceType();
              }}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="navlink"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              HandleDeviceType();
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/#works_section"
            className="navlink"
            style={{ cursor: "pointer" }}
            onClick={HandleDeviceType}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="/#design_section"
            className="navlink"
            style={{ cursor: "pointer" }}
            onClick={HandleDeviceType}
          >
            Design
          </Link>
        </li>
        <li>
          <Link
            to="/about/#maincontent"
            className="navlink"
            style={{ cursor: "pointer" }}
            onClick={HandleDeviceType}
          >
            About
          </Link>
        </li>
        <div id="social_links">
          <a
            href="https://www.linkedin.com/in/aidan-yip"
            className="social_logo"
            style={{ cursor: "pointer" }}
          >
            <img src="/icons/InBug-White.png" alt="Visit LinkedIn" />
          </a>
          <a
            href="https://github.com/aidan-yip"
            className="social_logo"
            style={{ cursor: "pointer" }}
          >
            <img src="/icons/github-mark-white.svg" alt="Visit GitHub" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
