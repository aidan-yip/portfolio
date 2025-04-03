import { Link } from "react-router-dom";
import { getWorkOne } from "../utilities/contentfulClient";

function Work_One() {
  const {
    workTitle1,
    workDevInfo1,
    workDesignInfo1,
    workImage1,
    workImage1Alt,
  } = getWorkOne();

  return (
    <section className="section work_background">
      <article className="work_container">
        <img
          src={workImage1}
          alt={workImage1Alt}
          className="work_image"
          tabIndex={0}
        />
        <div className="work_text_container">
          <h2 className="work_title" tabIndex={0}>
            {workTitle1}
          </h2>
          <a
            href="https://aidanyip.com/eclipse/"
            className="project_link margin_right"
            style={{ cursor: "pointer" }}
          >
            Visit
          </a>
          <a
            href="https://github.com/aidan-yip/eclipse"
            className="project_link margin_right"
            style={{ cursor: "pointer" }}
          >
            GitHub
          </a>
          <p className="work_info" tabIndex={0}>
            {workDevInfo1}
          </p>
          <p className="work_info" tabIndex={0}>
            {workDesignInfo1}
          </p>
        </div>
      </article>
    </section>
  );
}

export default Work_One;
