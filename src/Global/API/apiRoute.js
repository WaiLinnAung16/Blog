const API = import.meta.env.VITE_API;

const loginRoute = `${API}/login`;
const registerRoute = `${API}/register`;
const getAllBlogRoute = `${API}/blog`;
const getSingleBlogRoute = `${API}/blog/owner-blogs`;
const likeBlogRoute = `${API}/blog/like`;
const commentBlogRoute = `${API}/blog/comment`;

export { loginRoute, registerRoute, getAllBlogRoute,likeBlogRoute,getSingleBlogRoute,commentBlogRoute };
