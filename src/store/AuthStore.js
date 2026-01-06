import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser, registerUser } from "../utils/AuthFetch";
import API from "../utils/API";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      loading: false,
      error: null,

      setUser: (userData) => set({ 
        user: userData, 
        isLoggedIn: true 
      }),

      // REGISTER
      registerUser: async (formData) => {
        
        set({ loading: true, error: null });

        try {
          const res = await registerUser(formData);

          const user = res.data?.[0];

          set({
            user,
            isLoggedIn: true,
          });

          return { success: true, user};
        } catch (err) {
          set({
            error: err.response?.data?.message || "Registration failed",
          });
          return { success: false };
        } finally {
          set({ loading: false });
        }
      },

      // LOGIN
      login: async (data) => {
        set({ loading: true, error: null });

        try {
          const res = await loginUser(data);

          
          const user = res.data;
          

          set({
            user,
            isLoggedIn: true,
          });

          return { success: true };
        } catch (err) {
          set({
            error: err.response?.data?.message || "Login failed",
          });

          return { success: false };
        } finally {
          set({ loading: false });
        }
      },

      logout: () =>
        set({
          isLoggedIn: false,
          user: null,
        }),

      checkAuth: async () => {
        try {
          const res = await API.get("api/auth/me");
          // console.log(res.data)
          set({ user: res.data, isLoggedIn: true });
        } catch (err) {
          set({ user: null, isLoggedIn: false });
        }
      },
    }),
    {
      name: "auth-storage", // <== REQUIRED
    }
  )
);
