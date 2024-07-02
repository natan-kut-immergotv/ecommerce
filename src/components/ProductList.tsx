// src/components/ProductList.tsx
import React from 'react';
import { useStore } from '../store/store';
import Product from './Product';

const ProductList: React.FC = () => {
  const products = useStore((state) => state.products);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
