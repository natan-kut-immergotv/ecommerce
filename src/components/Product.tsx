// src/components/Product.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, description, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer h-[28rem]"
      onClick={handleClick}
    >
      <div className="w-full h-48 flex items-center justify-center bg-gray-200">
        <img className="max-h-full max-w-full" src={image} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base line-clamp-5">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Product;
