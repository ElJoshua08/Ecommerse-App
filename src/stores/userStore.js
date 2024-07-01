import { create } from 'zustand';
import { fetchUser } from '@/api/fetchUser';

export const useUserStore = create((set) => ({
  user: null, // Valor inicial
  setUser: (user) => set({ user }),
  fetchUserData: async () => {
    const userData = await fetchUser();
    set({ user: userData });
  },
}));
