import { create } from 'zustand';
import { fetchUser } from '@/api/fetchUser';

export const useUserStore = create((set, get) => ({
  user: null, // Initial value
  setUser: (user) => set({ user }),
  setPreferredTheme: (theme) =>
    set((state) => ({
      user: {
        ...state.user,
        preferences: {
          ...state.user.preferences,
          theme,
        },
      },
    })),
  addItemToOrder: (item) =>
    set((state) => ({
      user: {
        ...state.user,
        orders: [...(state.user.orders || []), item],
      },
    })),
  isItemInOrder: (item) => {
    const user = get().user;
    return user.orders.some((order) => order.id === item.id);
  },
  removeItemFromOrder: (item) =>
    set((state) => ({
      user: {
        ...state.user,
        orders: state.user.orders.filter((order) => order.id !== item.id),
      },
    })),
  fetchUserData: async () => {
    const userData = await fetchUser();
    set({ user: userData });
  },
}));
