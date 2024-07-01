import { create } from 'zustand';

const usePageStore = create((set) => ({
  pages: [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Cart', path: '/cart' },
    { name: 'My Account', path: '/my-account' },
  ],
  actualPage: '/',
  setActualPage: (page) => set({ actualPage: page }),
}));

export { usePageStore };
