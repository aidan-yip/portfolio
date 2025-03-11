import { Link } from "react-router-dom";

import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleMenu() {
    if (menuOpen) {
      document.querySelector("nav").style.opacity = "0";
      setMenuOpen(false);
    } else {
      document.querySelector("nav").style.opacity = "1";
      setMenuOpen(true);
    }
  }

  return (
    <header>
      <a href="#maincontent" id="skip_to_main">
        Skip to main content
      </a>
      <button id="menu_button" aria-label="Menu" onClick={ToggleMenu}></button>
      <nav aria-expanded={menuOpen}>
        <li>
          <Link
            to="/#hero_section"
            className="site_logo_link"
            style={{ cursor: "pointer" }}
          >
            <img
              src="/icons/aidan_logo_clear.svg"
              alt="Aidan's site logo"
              id="site_logo"
              style={{ cursor: "pointer" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="navlink"
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/#works_section"
            className="navlink"
            style={{ cursor: "pointer" }}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="/#design_section"
            className="navlink"
            style={{ cursor: "pointer" }}
          >
            Design
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="navlink"
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
            <img src="/icons/InBug-White.png" />
          </a>
          <a
            href="https://github.com/aidan-yip"
            className="social_logo"
            style={{ cursor: "pointer" }}
          >
            <img src="/icons/github-mark-white.svg" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
