// pages/api/hero.js
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const response = await fetch(`http://${process.env.API_RAILWAY}/api/nav`);
      const data = await response.json();

      return res.status(200).json(data);

    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}
