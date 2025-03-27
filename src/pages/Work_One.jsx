import React, { useEffect, useState } from "react";

// Contentful CMS
import { client } from "../utilities/contentfulClient";
import { CONTENTFUL_ENTRY_ID_1, WORK_IMAGE_1_ID } from "../globals/globals";

function Work_One() {
  // text assets
  const [workTitle1, setWorkTitle1] = useState("Loading...");
  const [workDevInfo1, setWorkDevInfo1] = useState("Loading...");
  const [workDesignInfo1, setWorkDesignInfo1] = useState("Loading...");
  // image assets
  const [workImage1, setWorkImage1] = useState(null);
  const [workImage1Alt, setWorkImage1Alt] = useState("Loading...");

  useEffect(() => {
    const fetchData = () => {
      client
        .getEntry(CONTENTFUL_ENTRY_ID_1)
        .then(({ fields }) => {
          setWorkTitle1(fields.workTitle);
          setWorkDevInfo1(fields.workDevInfo);
          setWorkDesignInfo1(fields.workDesignInfo);
          return client.getAsset(WORK_IMAGE_1_ID);
        })
        .then((asset) => {
          setWorkImage1(asset.fields.file.url);
          setWorkImage1Alt(asset.fields.description);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setWorkTitle1("Error loading data");
          setWorkDevInfo1("Error loading data");
          setWorkDesignInfo1("Error loading data");
          setWorkImage1Alt("Error loading data");
        });
    };
    fetchData();
  }, []);

  console.log("workImage1", workImage1);
  console.log("workImage1Alt", workImage1Alt);

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
