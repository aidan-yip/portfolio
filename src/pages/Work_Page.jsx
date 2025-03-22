import React, { useEffect, useState } from "react";

// Contentful CMS
import { createClient } from "contentful";
import { CONTENTFUL_TOKEN, CONTENTFUL_SPACE, CONTENTFUL_ENTRY_ID } from "../globals/globals";

const client = createClient({
  space: CONTENTFUL_SPACE, // Replace with your Space ID
  accessToken: CONTENTFUL_TOKEN, // Replace with your Access Token
});

function Work_Page() {
  const [textField, setTextField] = useState("Loading...");

  useEffect(() => {
    const fetchTextField = async () => {
      try {
        // Fetch the entry
        const entry = await client.getEntry(CONTENTFUL_ENTRY_ID); // Replace with your Entry ID

        // Extract the text field from the entry fields
        const text = entry.fields.workTitle; // Replace with the actual field name
        setTextField(text);
      } catch (error) {
        console.error("Error fetching text field:", error);
        setTextField("Error loading text field");
      }
    };

    fetchTextField();
  }, []);

  return (
    <div>
      <>
        <h1>Works</h1>
        <p>I love to work</p>
        <p>{textField}</p>
      </>
    </div>
  );
}

export default Work_Page;
