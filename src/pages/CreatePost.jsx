import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePost = () => {
  const [form, setForm] = useState({
    username: '',
    content: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(form).then(() => {
      setForm({ username: '', content: '', imageUrl: '' });
    });
  };

  return (
    <div className="container">
      <h2 className="my-4">Create a Post</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="username" value={form.username} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea name="content" value={form.content} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL (optional)</label>
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
