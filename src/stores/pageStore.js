import { create } from 'zustand';
import {
  FaHome,
  FaShoppingBasket,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import { Home } from '@/pages/Home';
import { Products } from '@/pages/Products';
import { MyOrders } from '@/pages/MyOrders';
import { MyAccount } from '@/pages/MyAccount';

const usePageStore = create((set) => ({
  pages: [
    { name: 'Home', path: '/', element: Home, icon: FaHome },
    {
      name: 'Products',
      path: '/products',
      element: Products,
      icon: FaShoppingCart,
    },
    {
      name: 'My Orders',
      path: '/my-orders',
      element: MyOrders,
      icon: FaShoppingBasket,
    },
    {
      name: 'My Account',
      path: '/my-account',
      element: MyAccount,
      icon: FaUser,
    },
  ],
  actualPage: '/',
  setActualPage: (page) => set({ actualPage: page }),
}));

export { usePageStore };
