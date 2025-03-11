import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <>
      <section className="section" id="about_section">
        <div className="about_info">
          <img
            src="/images/ade.png"
            alt="Aidan's site logo"
            id="ade_img_large"
          />
          <article className="text_container">
            <h1 id="about_header">Aidan Yip</h1>
            <p id="about_subheader">Front-End Developer/Designer</p>
            <p id="about_bio">
              I am a Front-End Developer and Designer with a passion for
              creating beautiful and functional websites. I have experience
              working with HTML, CSS, JavaScript, React, and more. I am
              constantly learning new skills and technologies to improve my
              craft.
            </p>
          </article>
        </div>
      </section>
      <section className="section" id="skills_section">
      <article className="text_container">
          <p id="about_bio">
            I am a Front-End Developer and Designer with a passion for creating
            beautiful and functional websites. I have experience working with
            HTML, CSS, JavaScript, React, and more. I am constantly learning new
            skills and technologies to improve my craft.
          </p>
        </article>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
      </section>
    </>
  );
}

export default About;
