import { getWorkTwo } from "../utilities/contentfulClient";

function Work_Two() {
  const { workTitle2, workDevInfo2, workDesignInfo2, workImage2, workImage2Alt } = getWorkTwo();

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
          <p className="work_info" tabIndex={0}>
            {workDevInfo2}
          </p>
          <p className="work_info" tabIndex={0}>
            {workDesignInfo2}
          </p>
        </div>
      </article>
    </section>
  );
}

export default Work_Two;
