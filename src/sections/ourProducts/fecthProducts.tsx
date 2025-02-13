import { useEffect, useState } from 'react';

interface Thumbnail {
  rawFile?: {
    path: string;
    relativePath: string;
  };
  src: string;
  title: string;
}

interface Product {
  title: string;
  price: number;
  stock: number;
  code: string;
  status: string;
  category: string;
  description: string;
  thumbnails: Thumbnail[];
}

const useProductList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();

        const transformedProducts: Product[] = data.data.map((product:Product) => ({
          title: product.title,
          description: product.description,
          price: product.price,
          stock: product.stock,
          code: product.code,
          status: product.status,
          category: product.category,
          thumbnails: Array.isArray(product.thumbnails)
            ? product.thumbnails.map((thumb: Thumbnail) => ({
                rawFile: thumb.rawFile,
                src: thumb.src,
                title: thumb.title,
              }))
            : [],
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { isLoading, products };
};

export default useProductList;
