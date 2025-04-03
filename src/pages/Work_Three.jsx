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
          <a
            href="https://aidanyip.com/woo/"
            className="project_link margin_right"
            style={{ cursor: "pointer" }}
          >
            Visit
          </a>
          <p className="work_info" tabIndex={0}>
            {workDevInfo3}
          </p>
          <p className="work_info" tabIndex={0}>
            {workDesignInfo3}
          </p>
        </div>
      </article>
    </section>
  );
}

export default Work_Two;
