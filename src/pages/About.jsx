import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Me";
    window.scrollTo(0, 0);
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
        <div className="section_div skills_div text_left">
          <article className="skills_text">
            <p id="about_bio">
              I am a Front-End Developer and Designer with a passion for
              creating beautiful and functional websites. I have experience
              working with HTML, CSS, JavaScript, React, and more. I am
              constantly learning new skills and technologies to improve my
              craft.
            </p>
          </article>
          <h2 className="skills_title">Development</h2>
          <ul className="skills_container">
            <li className="skill_item">HTML</li>
            <li className="skill_item">CSS</li>
            <li className="skill_item">JavaScript</li>
            <li className="skill_item">React</li>
            <li className="skill_item">Node.js</li>
            <li className="skill_item">Express</li>
            <li className="skill_item">MongoDB</li>
            <li className="skill_item">Git</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
