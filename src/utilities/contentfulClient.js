// react
import { useEffect, useState } from "react";

// Contentful CMS
import { createClient } from "contentful";
import {
  CONTENTFUL_TOKEN,
  CONTENTFUL_SPACE,
  CONTENTFUL_ENTRY_ID_1,
  CONTENTFUL_ENTRY_ID_2,
  CONTENTFUL_ENTRY_ID_3,
} from "../globals/globals";

// Contentful image variables
import {
  WORK_IMAGE_1_ID,
  WORK_IMAGE_2_ID,
  WORK_IMAGE_3_ID,
} from "../globals/globals";

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_TOKEN,
});

function getWorkOne() {
  // text state
  const [workTitle1, setWorkTitle1] = useState("Loading...");
  const [workDevInfo1, setWorkDevInfo1] = useState("Loading...");
  const [workDesignInfo1, setWorkDesignInfo1] = useState("Loading...");

  // image state
  const [workImage1, setWorkImage1] = useState(null);
  const [workImage1Alt, setWorkImage1Alt] = useState("Loading...");

  // fetch data from Contentful
  useEffect(() => {
    const fetchData1 = () => {
      client
        .getEntry(CONTENTFUL_ENTRY_ID_1)
        .then(({ fields }) => {
          setWorkTitle1(fields.workTitle);
          setWorkDevInfo1(fields.workDevInfo);
          setWorkDesignInfo1(fields.workDesignInfo);
          // image assets
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
    fetchData1();
  }, []);

  return {
    workTitle1,
    workDevInfo1,
    workDesignInfo1,
    workImage1,
    workImage1Alt,
  };
}

function getWorkTwo() {
  // text state
  const [workTitle2, setWorkTitle2] = useState("Loading...");
  const [workDevInfo2, setWorkDevInfo2] = useState("Loading...");
  const [workDesignInfo2, setWorkDesignInfo2] = useState("Loading...");

  // image state
  const [workImage2, setWorkImage2] = useState(null);
  const [workImage2Alt, setWorkImage2Alt] = useState("Loading...");

  // fetch data from Contentful
  useEffect(() => {
    const fetchData2 = () => {
      client
        .getEntry(CONTENTFUL_ENTRY_ID_2)
        .then(({ fields }) => {
          setWorkTitle2(fields.workTitle);
          setWorkDevInfo2(fields.workDevInfo);
          setWorkDesignInfo2(fields.workDesignInfo);
          // image assets
          return client.getAsset(WORK_IMAGE_2_ID);
        })
        .then((asset) => {
          setWorkImage2(asset.fields.file.url);
          setWorkImage2Alt(asset.fields.description);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setWorkTitle2("Error loading data");
          setWorkDevInfo2("Error loading data");
          setWorkDesignInfo2("Error loading data");
          setWorkImage2Alt("Error loading data");
        });
    };
    fetchData2();
  }, []);

  return {
    workTitle2,
    workDevInfo2,
    workDesignInfo2,
    workImage2,
    workImage2Alt,
  };
}

function getWorkThree() {
  // text state
  const [workTitle3, setWorkTitle3] = useState("Loading...");
  const [workDevInfo3, setWorkDevInfo3] = useState("Loading...");
  const [workDesignInfo3, setWorkDesignInfo3] = useState("Loading...");

  // image state
  const [workImage3, setWorkImage3] = useState(null);
  const [workImage3Alt, setWorkImage3Alt] = useState("Loading...");

  // fetch data from Contentful
  useEffect(() => {
    const fetchData3 = () => {
      client
        .getEntry(CONTENTFUL_ENTRY_ID_3)
        .then(({ fields }) => {
          setWorkTitle3(fields.workTitle);
          setWorkDevInfo3(fields.workDevInfo);
          setWorkDesignInfo3(fields.workDesignInfo);
          // image assets
          return client.getAsset(WORK_IMAGE_3_ID);
        })
        .then((asset) => {
          setWorkImage3(asset.fields.file.url);
          setWorkImage3Alt(asset.fields.description);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setWorkTitle3("Error loading data");
          setWorkDevInfo3("Error loading data");
          setWorkDesignInfo3("Error loading data");
          setWorkImage3Alt("Error loading data");
        });
    };
    fetchData3();
  }, []);

  return {
    workTitle3,
    workDevInfo3,
    workDesignInfo3,
    workImage3,
    workImage3Alt,
  };
}

export { getWorkOne, getWorkTwo, getWorkThree };
