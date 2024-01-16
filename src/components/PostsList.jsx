import Post from "./Post";
import classes from "./PostsList.module.css";
const posts = [
  { author: "Yasmin", body: "UI Certification" },
  { author: "Gabs", body: "React JS Certification" },
];
const PostList = () => {
  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <li>
          <Post author={post.author} body={post.body} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
