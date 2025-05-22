import axios from "axios";

// Use environment variable or fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/posts";

export const getPosts = () => axios.get(API_URL);
export const createPost = (post) => axios.post(API_URL, post);
export const updatePost = (id, post) => axios.put(`${API_URL}/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
