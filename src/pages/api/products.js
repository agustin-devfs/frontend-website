// pages/api/products.js
export default async function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        // Realiza una solicitud GET al backend de Express para obtener usuarios
        const response = await fetch(`http://${process.env.API_RAILWAY}/api/products`);
        const data = await response.json();
        return res.status(200).json(data);
  
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  


 
