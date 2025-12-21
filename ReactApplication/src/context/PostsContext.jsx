import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 20)));
  }, []);

  const updatePost = (id, updatedPost) => {
    setPosts(prev =>
      prev.map(post => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };


  const deletePost = id => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};