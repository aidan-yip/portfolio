// react router dom
import { Link } from "react-router-dom";

import "../styles/_works.scss";
import "../styles/_design.scss";
import { useEffect } from "react";

// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// fancybox lightbox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
  });

function Home() {
  useEffect(() => {
    document.title = "Aidan's Portfolio";
  }, []);

  return (
    <>
      <section className="section" id="hero_section">
        <img
          src="/images/aidan_logo_clear.svg"
          alt="Aidan's site logo"
          id="site_logo_large"
        />
        <div>
          <h1 id="hero_header">Hey There, I'm Aidan!</h1>
          <p id="hero_subheader">Front-End Developer/Designer</p>
        </div>
      </section>

      {/* creative works */}
      <section className="section" id="works_section">
        <div
          className="project_grid"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <div className="grid_card">
            <img
              src="/images/aidan_logo_clear.svg"
              alt="Aidan's site logo"
              className="project_img"
            />
            <Link
              to="/work"
              className="project_link"
              style={{ cursor: "pointer" }}
            >
              Learn More
            </Link>
          </div>
          <div className="grid_card">
            <img
              src="/images/aidan_logo_clear.svg"
              alt="Aidan's site logo"
              className="project_img"
            />
            <Link
              to="/work"
              className="project_link"
              style={{ cursor: "pointer" }}
            >
              Learn More
            </Link>
          </div>
          <div className="grid_card">
            <img
              src="/images/aidan_logo_clear.svg"
              alt="Aidan's site logo"
              className="project_img"
            />
            <Link
              to="/work"
              className="project_link"
              style={{ cursor: "pointer" }}
            >
              Learn More
            </Link>
          </div>
          <div className="grid_card">
            <img
              src="/images/aidan_logo_clear.svg"
              alt="Aidan's site logo"
              className="project_img"
            />
            <Link
              to="/work"
              className="project_link"
              style={{ cursor: "pointer" }}
            >
              More Works
            </Link>
          </div>
        </div>
      </section>

      {/* design */}
      <section className="section" id="design_section">
        <div
          className="design_grid"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <div className="grid_card art_card">
            <a
              href="/images/clouds_no_logo.png"
              className="gallery_open"
              data-fancybox="gallery"
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/clouds_no_logo.png"
                alt="Aidan's site logo"
                className="art_img"
              />
            </a>
          </div>
          <div className="grid_card art_card">
            <a
              href="/images/dawn.jpg"
              className="gallery_open"
              data-fancybox="gallery"
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/dawn.jpg"
                alt="Aidan's site logo"
                className="art_img"
              />
            </a>
          </div>
          <div className="grid_card art_card">
            <a
              href="/images/time.png"
              className="gallery_open"
              data-fancybox="gallery"
              style={{ cursor: "pointer" }}
            >
              <img
                src="/images/time.png"
                alt="Aidan's site logo"
                className="art_img"
              />
            </a>
          </div>
        </div>
        <div
          className="style_guide_grid"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <div className="style_card">
            <a
              href="/images/style_devices_clear.png"
              className="gallery_open"
              data-fancybox="gallery"
            >
              <img
                src="/images/style_devices_clear.png"
                alt="Aidan's site logo"
                className="style_img"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
