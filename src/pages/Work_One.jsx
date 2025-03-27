import React, { useEffect, useState } from "react";

// Contentful CMS
import { client } from "../utilities/contentfulClient";
import {
  CONTENTFUL_ENTRY_ID,
  WORK_IMAGE_1_ID,
} from "../globals/globals";

function Work_One() {
  // text assets
  const [workTitle1, setWorkTitle1] = useState("Loading...");
  const [workDevInfo1, setWorkDevInfo1] = useState("Loading...");
  const [workDesignInfo1, setWorkDesignInfo1] = useState("Loading...");
  // image assets
  const [workImage1, setWorkImage1] = useState(null);

  console.log("workImage1", workImage1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { fields } = await client.getEntry(CONTENTFUL_ENTRY_ID);
        setWorkTitle1(fields.workTitle);
        setWorkDevInfo1(fields.workDevInfo);
        setWorkDesignInfo1(fields.workDesignInfo);
        const asset = await client.getAsset(WORK_IMAGE_1_ID);
        setWorkImage1(asset.fields.file.url);
      } catch (error) {
        console.error("Error fetching data:", error);
        setWorkTitle1("Error loading data");
        setWorkDevInfo1("Error loading data");
        setWorkDesignInfo1("Error loading data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <img
          src={workImage1}
          alt="Work Image 1"
        />
        <h2>{workTitle1}</h2>
        <p>{workDevInfo1}</p>
        <p>{workDesignInfo1}</p>
      </>
    </div>
  );
}

export default Work_One;
