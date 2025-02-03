import { useEffect, useState } from 'react';

interface Product {
  title: string;
  price: number;
  stock: number;
  code: string;
  status: string;
  category: string;
  description: string;
  thumbnails: string[];
}

const useProductList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const transformedProducts: Product[] = data.data.map((product: Product) => ({
          title: product.title,
          description: product.description,
          price: product.price,
          stock: product.stock,
          code: product.code,
          status: product.status,
          category: product.category,
          thumbnails: product.thumbnails || [], 
        }));
        setProducts(transformedProducts);
      } catch (error) {
        console.log('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { isLoading, products };
};

export default useProductList;
