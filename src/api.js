const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const getPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (post) => axios.post(`${API_URL}/posts`, post);
export const updatePost = (id, post) => axios.put(`${API_URL}/posts/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);
