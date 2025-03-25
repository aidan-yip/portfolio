// react
import { useEffect, useRef } from "react";

// react router dom
import { Link } from "react-router-dom";

// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// three.js
import * as THREE from "three";

// vanta.js
import RINGS from "vanta/dist/vanta.rings.min";

// fancybox lightbox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {});

function Home() {
  useEffect(() => {
    document.title = "Aidan's Portfolio";
  }, []);

  // vanta rings background
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = RINGS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      color: 0x20d6ff,
      backgroundColor: 0x22,
      vertexColors: THREE.VertexColors,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <section className="section" id="hero_section" ref={vantaRef}>
        <img
          src="/images/aidan_logo_clear.svg"
          alt="Aidan's site logo"
          id="site_logo_large"
        />
        <div>
          <h1 id="hero_header" tabIndex={0}>
            Hey There, I'm Aidan!
          </h1>
          <p id="hero_subheader" tabIndex={0}>
            Front-End Developer/Designer
          </p>
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
              src="/images/imac_test.png"
              alt="Aidan's site logo"
              className="project_img"
            />
            <h2 className="project_title">Eclipse</h2>
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
              src="/images/imac_test.png"
              alt="Aidan's site logo"
              className="project_img"
            />
            <h2 className="project_title">Ocean Clip</h2>
            <Link
              to="/work"
              className="project_link"
              style={{ cursor: "pointer" }}
            >
              Learn More
            </Link>
          </div>
          <div className="grid_card span_2">
            <img
              src="/images/imac_test.png"
              alt="Aidan's site logo"
              className="project_img"
            />
            <h2 className="project_title">Woo Store</h2>
            <Link
              to="/work"
              className="project_link"
              style={{ cursor: "pointer" }}
            >
              Learn More
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
                alt="A cityscape above the clouds with a blue background"
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
                alt="A neon cityscape in Tokyo at dawn with a purple background"
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
                alt="A clock with wings and a light blue background filled with clocks"
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
              style={{ cursor: "pointer" }}
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
