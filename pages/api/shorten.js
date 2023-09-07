import { customAlphabet, urlAlphabet } from "nanoid";

export default async function handler(req, res) {
  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_KEY = process.env.GRAPHQL_KEY;
  const shortCode = customAlphabet(urlAlphabet, 5)();

  const response = {};
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    response.data = await res.json();
    response.statusCode = 200;
  } catch (error) {}
  res.status(response.statusCode).json(response.data);
}
