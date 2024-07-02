// src/App.tsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchProducts } from './utils/api';
import { useStore } from './store/store';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout';

const App: React.FC = () => {
  const setProducts = useStore((state) => state.setProducts);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, [setProducts]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Rutas adicionales */}
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
