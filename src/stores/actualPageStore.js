import { create } from 'zustand';

const usePageStore = create((set) => ({
  actualPage: '/',
  setActualPage: (actualPage) => set({ actualPage }),
}));

export default usePageStore;
