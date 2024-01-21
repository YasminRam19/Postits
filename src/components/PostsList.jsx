import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

const posts = [
  { author: "Yasmin", body: "UI Certification" },
  { author: "Gabs", body: "React JS Certification" },
];

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.body}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && !isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
