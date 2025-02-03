import { FC } from 'react';
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface ProductCardProps {
  title: string;
  description: string;
  code: string;
  price: number;
  status: string;
  stock: number;
  category: string;
  thumbnails: string[];
}

const ProductCard: FC<ProductCardProps> = ({ title, description, code, price, status, stock, category, thumbnails }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3, p: 2, textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        {status === "unavailable" && (
          <Chip label="Out of Stock" color="secondary" sx={{ position: 'absolute', top: 10, left: 10, fontWeight: 'bold' }} />
        )}
        <Image src={thumbnails[0] || "/placeholder.png"} alt={title} width={250} height={200} style={{ borderRadius: 8 }} />
      </Box>
      <CardContent>
        <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>{title}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>{description}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>Category: {category}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>Code: {code}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
          <Typography variant="h5" fontWeight={700} color="primary">${price}</Typography>
        </Box>
        <Typography variant="body2" color={stock > 0 ? "success.main" : "error.main"} sx={{ mt: 1 }}>
          {stock > 0 ? `Stock: ${stock}` : "Out of Stock"}
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} startIcon={<ShoppingCartIcon />} disabled={stock === 0}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
