import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

const posts = [
  { author: "Yasmin", body: "UI Certification" },
  { author: "Gabs", body: "React JS Certification" },
];
const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <li key={post.body}>
              <Post author={post.author} body={post.body} />
            </li>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
