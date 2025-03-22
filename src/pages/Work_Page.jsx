import React, { useEffect, useState } from 'react';

import { createClient } from 'contentful';

const client = createClient({
  space: '367119c8zks4', // Replace with your Space ID
  accessToken: 'KSamhDaZrTzdcll1kmOFP3U3pvv8Z-k7A3r2AT2IP4o' // Replace with your Access Token
});

function Work_Page() {

  const [textField, setTextField] = useState('Loading...');

  useEffect(() => {
    const fetchTextField = async () => {
      try {
        // Fetch the entry
        const entry = await client.getEntry('1haKJdGAlmDTIb3T8WiblV'); // Replace with your Entry ID

        // Extract the text field from the entry fields
        const text = entry.fields.workTitle; // Replace with the actual field name
        setTextField(text);
      } catch (error) {
        console.error('Error fetching text field:', error);
        setTextField('Error loading text field');
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