import { create } from "zustand";
import {persist} from 'zustand/middleware'

const store = (set) => ({
  userInfo: {},
  blog:{},
  addUser: (payload) => set(() => ({ userInfo: payload })),
  addBlog:(payload)=>set(()=>({blog:payload})),
});

export const userStore = create(persist(store,{name:'blog'}));
