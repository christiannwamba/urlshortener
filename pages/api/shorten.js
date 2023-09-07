import { customAlphabet, urlAlphabet } from "nanoid";

export default async function handler(req, res) {
  const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
  const GRAPHQL_KEY = process.env.GRAPHQL_KEY;
  const shortCode = customAlphabet(urlAlphabet, 5)();

  const query = /* GraphQL */ `
    mutation CREATE_URL($input: CreateURLInput!) {
      createURL(input: $input) {
        long
        short
      }
    }
  `;

  const options = {
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  const response = {};
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    response.data = await res.json();
    response.statusCode = 200;
    if (response.data.errors) response.statusCode = 400;
  } catch (error) {
    response.statusCode = 400;
    response.data = {
      errors: [
        {
          message: error.message,
          stack: error.stack,
        },
      ],
    };
  }
  res.status(response.statusCode).json(response.data);
}
