import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Me";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section" id="about_section">
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
              <p id="about_bio">
                I am a Front-End Developer and Designer with a passion for
                creating beautiful and functional websites. I have experience
                working with HTML, CSS, JavaScript, React, and more. I am
                constantly learning new skills and technologies to improve my
                craft.
              </p>
            </article>
          </div>

          <div className="section_div skills_div text_left">
            <article className="skills_text">
              <p className="font_bold line_height">
                I am a Front-End Developer and Designer with a passion for
                creating beautiful and functional websites. I have experience
                working with HTML, CSS, JavaScript, React, and more. I am
                constantly learning new skills and technologies to improve my
                craft.
              </p>
            </article>

            {/* development */}
            <h2 className="skills_title">Development</h2>
            <ul className="skills_container">
              <li className="skill_item">HTML</li>
              <li className="skill_item">CSS</li>
              <li className="skill_item">Sass</li>
              <li className="skill_item">JavaScript</li>
              <li className="skill_item">React</li>
              <li className="skill_item">PHP</li>
              <li className="skill_item">WordPress</li>
              <li className="skill_item">Liquid</li>
              <li className="skill_item">Shopify</li>
              <li className="skill_item">Git</li>
              <li className="skill_item">GitHub</li>
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
