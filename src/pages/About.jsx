// copyright © Aidan Yip, all rights reserved.

// react
import React, { useEffect, useRef } from "react";

// three.js
import * as THREE from "three";

// vanta.js
import GLOBE from "vanta/dist/vanta.globe.min";

function About() {
  useEffect(() => {
    document.title = "About Me";
    window.scrollTo(0, 0);
  }, []);

  // vanta globe background
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      color: 0x44d5ff,
      backgroundColor: 0x22,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <section className="section" id="about_section" ref={vantaRef}>
        <div className="about_container">
          <div className="about_info">
            <img
              src="/images/ade.png"
              alt="Picture of Aidan Yip"
              id="ade_img_large"
              tabIndex={0}
            />
            <article className="text_container">
              <h1 id="about_header" tabIndex={0}>
                Aidan Yip
              </h1>
              <p id="about_subheader" tabIndex={0}>
                Front-End Developer/Designer
              </p>
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
              <p id="about_bio" tabIndex={0}>
                Passionate about creating intuitive user interfaces. My unique
                background as a Film Intern and Digital Colorist provides me
                with a distinct advantage in web design and a comprehensive
                understanding of color science and theory.
              </p>
              <a
                href="mailto:jamesayipt6@gmail.com"
                className="project_link email_link"
                style={{ cursor: "pointer" }}
              >
                Email Me
              </a>
            </article>
          </div>

          <div className="section_div skills_div text_left">
            <article className="skills_text">
              <h2 className="large_title" tabIndex={0}>
                Design Meets Function.
              </h2>
              <p className="font_bold line_height" tabIndex={0}>
                I believe websites should be more than just functional, they
                should bring a sense of joy and delight. When form meets
                function intuitively, it creates a seamless user experience.
              </p>
            </article>

            {/* development */}
            <h2 className="skills_title" tabIndex={0}>
              Development
            </h2>
            <ul className="skills_container" tabIndex={0}>
              <li className="skill_item" tabIndex={0}>
                HTML
              </li>
              <li className="skill_item" tabIndex={0}>
                CSS
              </li>
              <li className="skill_item" tabIndex={0}>
                SASS/SCSS
              </li>
              <li className="skill_item" tabIndex={0}>
                JavaScript
              </li>
              <li className="skill_item" tabIndex={0}>
                React
              </li>
              <li className="skill_item" tabIndex={0}>
                PHP
              </li>
              <li className="skill_item" tabIndex={0}>
                WordPress
              </li>
              <li className="skill_item" tabIndex={0}>
                Woo Commerce
              </li>
              <li className="skill_item" tabIndex={0}>
                Liquid
              </li>
              <li className="skill_item" tabIndex={0}>
                Shopify
              </li>
              <li className="skill_item" tabIndex={0}>
                Git
              </li>
              <li className="skill_item" tabIndex={0}>
                GitHub
              </li>
              <li className="skill_item" tabIndex={0}>
                Vite
              </li>
              <li className="skill_item" tabIndex={0}>
                Linux
              </li>
              <li className="skill_item" tabIndex={0}>
                Ubuntu
              </li>
            </ul>

            {/* design */}
            <h2 className="skills_title" tabIndex={0}>
              Design
            </h2>
            <ul className="skills_container">
              <li className="skill_item" tabIndex={0}>
                Figma
              </li>
              <li className="skill_item" tabIndex={0}>
                Adobe XD
              </li>
              <li className="skill_item" tabIndex={0}>
                Illustrator
              </li>
              <li className="skill_item" tabIndex={0}>
                Lightroom
              </li>
              <li className="skill_item" tabIndex={0}>
                Photoshop
              </li>
              <li className="skill_item" tabIndex={0}>
                Adobe Fresco
              </li>
              <li className="skill_item" tabIndex={0}>
                Pixelmator Pro
              </li>
              <li className="skill_item" tabIndex={0}>
                GIMP
              </li>
            </ul>

            {/* media */}
            <h2 className="skills_title" tabIndex={0}>
              Media
            </h2>
            <ul className="skills_container">
              <li className="skill_item" tabIndex={0}>
                DaVinci Resolve
              </li>
              <li className="skill_item" tabIndex={0}>
                Logic Pro X
              </li>
              <li className="skill_item" tabIndex={0}>
                Final Cut Pro X
              </li>

              {/* <li className="skill_item" tabIndex={0}>
                Blender
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
