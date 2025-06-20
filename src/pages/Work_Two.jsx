// copyright © Aidan Yip, all rights reserved.

import { getWorkTwo } from "../utilities/contentfulClient";

function Work_Two() {
  const {
    workTitle2,
    workDevInfo2,
    workDesignInfo2,
    workImage2,
    workImage2Alt,
  } = getWorkTwo();

  return (
    <section className="section work_background">
      <article className="work_container">
        <img
          src={workImage2}
          alt={workImage2Alt}
          className="work_image"
          tabIndex={0}
        />

        <div className="work_text_container">
          <h2 className="work_title" tabIndex={0}>
            {workTitle2}
          </h2>
          <div className="links_container">
            <a
              href="https://ocean-clip.myshopify.com"
              className="project_link margin_right"
              style={{ cursor: "pointer" }}
            >
              Visit
            </a>
            <a
              href="https://github.com/aidan-yip/ocean-clip-theme"
              className="project_link margin_right"
              style={{ cursor: "pointer" }}
            >
              GitHub
            </a>
          </div>
          <p className="work_info" tabIndex={0}>
            {workDevInfo2}
          </p>
          <p className="work_info" tabIndex={0}>
            {workDesignInfo2}
          </p>

          {/* skills */}
          <ul className="skills_container" tabIndex={0}>
            <li className="skill_item" tabIndex={0}>
              HTML
            </li>
            <li className="skill_item" tabIndex={0}>
              CSS
            </li>
            <li className="skill_item" tabIndex={0}>
              JavaScript
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
              Pixelmator Pro
            </li>
          </ul>
        </div>
      </article>
      <h2 tabIndex={0} className="copyright_text">
        Copyright © Aidan Yip
      </h2>
    </section>
  );
}

export default Work_Two;
