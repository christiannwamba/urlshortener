import { customAlphabet, urlAlphabet } from "nanoid";

export default async function handler(req, res) {
  const shortCode = customAlphabet(urlAlphabet, 5)();
  console.log(shortCode)
  const response = {};
  res.status(response.statusCode).json(response.data);
}
