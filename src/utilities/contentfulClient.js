// Contentful CMS
import { createClient } from "contentful";
import {
  CONTENTFUL_TOKEN,
  CONTENTFUL_SPACE,
} from "../globals/globals";

const client = createClient({
  space: CONTENTFUL_SPACE, // Replace with your Space ID
  accessToken: CONTENTFUL_TOKEN, // Replace with your Access Token
});

export { client };