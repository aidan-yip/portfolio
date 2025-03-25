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
              alt="Aidan's site logo"
              id="ade_img_large"
            />
            <article className="text_container">
              <h1 id="about_header">Aidan Yip</h1>
              <p id="about_subheader">Front-End Developer/Designer</p>
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
              <p id="about_bio">
                Passionate about creating intuitive user interfaces. My unique
                background as a Film Intern and Digital Colorist provides me
                with a distinct advantage in web design and a comprehensive
                understanding of color science and theory.
              </p>
            </article>
          </div>

          <div className="section_div skills_div text_left">
            <article className="skills_text">
              <h2 className="large_title">Design Meets Function.</h2>
              <p className="font_bold line_height">
                I believe websites should be more than just functional, they
                should bring a sense of joy and delight. When form meets
                function intuitively, it creates a seamless user experience.
              </p>
            </article>

            {/* development */}
            <h2 className="skills_title">Development</h2>
            <ul className="skills_container">
              <li className="skill_item">HTML</li>
              <li className="skill_item">CSS</li>
              <li className="skill_item">SASS/SCSS</li>
              <li className="skill_item">JavaScript</li>
              <li className="skill_item">React</li>
              <li className="skill_item">PHP</li>
              <li className="skill_item">WordPress</li>
              <li className="skill_item">Liquid</li>
              <li className="skill_item">Shopify</li>
              <li className="skill_item">Git</li>
              <li className="skill_item">GitHub</li>
              <li className="skill_item">Vite</li>
              <li className="skill_item">Linux</li>
              <li className="skill_item">Ubuntu</li>
            </ul>

            {/* design */}
            <h2 className="skills_title">Design</h2>
            <ul className="skills_container">
              <li className="skill_item">Figma</li>
              <li className="skill_item">Adobe XD</li>
              <li className="skill_item">Illustrator</li>
              <li className="skill_item">Lightroom</li>
              <li className="skill_item">Photoshop</li>
              <li className="skill_item">Adobe Fresco</li>
              <li className="skill_item">GIMP</li>
            </ul>

            {/* media */}
            <h2 className="skills_title">Media</h2>
            <ul className="skills_container">
              <li className="skill_item">DaVinci Resolve</li>
              <li className="skill_item">Logic Pro X</li>
              <li className="skill_item">Final Cut</li>
              <li className="skill_item">Blender</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
