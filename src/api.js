import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const getPosts = () => axios.get(`${API_BASE_URL}/posts`);
export const createPost = (post) => axios.post(`${API_BASE_URL}/posts`, post);
export const updatePost = (id, post) => axios.put(`${API_BASE_URL}/posts/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_BASE_URL}/posts/${id}`);

