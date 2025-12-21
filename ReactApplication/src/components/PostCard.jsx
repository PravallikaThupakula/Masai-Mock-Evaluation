import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import { ThemeContext } from "../context/ThemeContext";

const PostCard = ({ post }) => {
  const { updatePost, deletePost } = useContext(PostsContext);
  const { theme } = useContext(ThemeContext);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    updatePost(post.id, { title, body });
    setIsEditing(false);
  };

  return (
    <div className={`card ${theme}`}>
      {isEditing ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <textarea value={body} onChange={e => setBody(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default PostCard;