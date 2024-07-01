import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { create } from 'zustand';

const usePageStore = create((set) => ({
  pages: [
    { name: 'Home', path: '/', icon: FaHome},
    { name: 'Products', path: '/products', icon: FaShop },
    { name: 'Cart', path: '/cart', icon: FaShoppingCart },
    { name: 'My Account', path: '/my-account', icon: FaUser },
  ],
  actualPage: '/',
  setActualPage: (page) => set({ actualPage: page }),
}));

export { usePageStore };
