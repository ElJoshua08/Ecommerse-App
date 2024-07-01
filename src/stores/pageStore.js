import { FaHome, FaShoppingBasket, FaShoppingCart, FaUser } from 'react-icons/fa';
import { create } from 'zustand';

const usePageStore = create((set) => ({
  pages: [
    { name: 'Home', path: '/', icon: FaHome},
    { name: 'Products', path: '/products', icon: FaShoppingCart },
    { name: 'Cart', path: '/cart', icon: FaShoppingBasket },
    { name: 'My Account', path: '/my-account', icon: FaUser },
  ],
  actualPage: '/',
  setActualPage: (page) => set({ actualPage: page }),
}));

export { usePageStore };
