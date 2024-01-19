import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getOwnerBlogRoute } from "./apiRoute";

const store = (set) => ({
  userInfo: null,
  comments: [],
  blog: {},
  profile: {},
  addUser: (payload) => set(() => ({ userInfo: payload })),
  addBlog: (payload) => set(() => ({ blog: payload })),
  addComment: (payload) =>
    set((store) => ({ comments: [...store.comments, payload] })),
  fetchProfile: async (id) => {
    try {
      const res = await axios.post(getOwnerBlogRoute, { ownerId: id });
      set(() => ({ profile: res?.data?.data[0] }));
    } catch (error) {
      console.log(error);
    }
  },
});

export const userStore = create(persist(store, { name: "blog" }));
