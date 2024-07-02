// src/store/store.ts
import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface StoreState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
