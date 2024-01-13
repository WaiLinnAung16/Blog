const API = import.meta.env.VITE_API;

const loginRoute = `${API}/login`;
const registerRoute = `${API}/register`;
const getUsersRoute = `${API}/user`;
const getAllBlogRoute = `${API}/blog`;
const createBlogRoute = `${API}/blog/create`;
const getSingleBlogRoute = `${API}/blog/single-blog`;
const getOwnerBlogRoute = `${API}/blog/owner-blogs`;
const likeBlogRoute = `${API}/blog/like`;
const commentBlogRoute = `${API}/blog/comment`;

export { loginRoute, registerRoute, getUsersRoute,getAllBlogRoute,createBlogRoute,likeBlogRoute,getSingleBlogRoute,commentBlogRoute,getOwnerBlogRoute };
