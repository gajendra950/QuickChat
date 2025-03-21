import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
    authUser: null, 
    isCheckingAuth: true,  
    isSigningUp: false, 
    isUpdatingProfile: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            set({ authUser: null });
            console.error("Error in checkAuth:", error.response?.data || error.message);
        } finally {
            set({ isCheckingAuth: false }); 
        }
    }
}));
