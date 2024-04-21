import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { authStorage } from '@/storages/auth';
import { StorageIds } from '@/enums/StorageIds';

type AuthStoreType = {
  isLoggedIn: boolean;
  accessToken: string;
  login: (accessToken: string) => void;
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      accessToken: '',
      login: (accessToken) => {
        set({
          accessToken,
          isLoggedIn: true,
        });
      },
    }),
    {
      name: StorageIds.Auth,
      storage: createJSONStorage(() => ({
        setItem: (name, value) => {
          return authStorage.set(name, value);
        },
        getItem: (name) => {
          const value = authStorage.getString(name);
          return value ?? null;
        },
        removeItem: (name) => {
          return authStorage.delete(name);
        },
      })),
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn, accessToken: state.accessToken }),
    },
  ),
);

export const useIsLoggedIn = () => useAuthStore((state) => state.isLoggedIn);
