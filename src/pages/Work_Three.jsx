// copyright © Aidan Yip, all rights reserved.

import { getWorkThree } from "../utilities/contentfulClient";

function Work_Two() {
  const {
    workTitle3,
    workDevInfo3,
    workDesignInfo3,
    workImage3,
    workImage3Alt,
  } = getWorkThree();

  return (
    <section className="section work_background">
      <article className="work_container">
        <img
          src={workImage3}
          alt={workImage3Alt}
          className="work_image"
          tabIndex={0}
        />
        <div className="work_text_container">
          <h2 className="work_title" tabIndex={0}>
            {workTitle3}
          </h2>
          <div className="links_container">
            <a
              href="https://woo-store.aidanyip.com"
              className="project_link margin_right"
              style={{ cursor: "pointer" }}
            >
              Visit
            </a>
          </div>
          <p className="work_info" tabIndex={0}>
            {workDevInfo3}
          </p>
          <p className="work_info" tabIndex={0}>
            {workDesignInfo3}
          </p>

          {/* skills */}
          <ul className="skills_container" tabIndex={0}>
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
              Git
            </li>
            <li className="skill_item" tabIndex={0}>
              GitHub
            </li>
            <li className="skill_item" tabIndex={0}>
              Illustrator
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
