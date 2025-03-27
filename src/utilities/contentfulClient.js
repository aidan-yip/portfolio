// react
import { useEffect, useState } from "react";

// Contentful CMS
import { createClient } from "contentful";
import { CONTENTFUL_TOKEN, CONTENTFUL_SPACE, CONTENTFUL_ENTRY_ID_1, WORK_IMAGE_1_ID  } from "../globals/globals";

const client = createClient({
  space: CONTENTFUL_SPACE, 
  accessToken: CONTENTFUL_TOKEN,
});

// WORK ONE REST API
function getWorkOne() {
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

  return { workTitle1, workDevInfo1, workDesignInfo1, workImage1, workImage1Alt };
}

export default getWorkOne;
