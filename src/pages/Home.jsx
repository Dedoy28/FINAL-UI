import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  const handleDelete = (id) => {
    deletePost(id).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div className="container">
      <h2 className="my-4">Recent Posts</h2>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              {post.imageUrl && (
                <img src={post.imageUrl} className="card-img-top" alt="Post" />
              )}
              <div className="card-body">
                <h5 className="card-title">{post.username}</h5>
                <p className="card-text">{post.content}</p>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
