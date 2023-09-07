export default async function handler(req, res) {
  const response = {};
  res.status(response.statusCode).json(response.data);
}
