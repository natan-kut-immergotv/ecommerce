// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useStore((state) => state.products.find((p) => p.id === Number(id)));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 shadow-lg rounded">
      <div className="w-full h-64 flex items-center justify-center bg-gray-200">
        <img className="max-h-full max-w-full" src={product.image} alt={product.name} />
      </div>
      <h2 className="text-3xl font-bold my-4">{product.name}</h2>
      <p className="text-gray-700 text-base mb-4">{product.description}</p>
      <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetail;
