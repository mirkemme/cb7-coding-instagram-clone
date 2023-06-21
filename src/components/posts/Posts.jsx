import Post from "../post/Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <section className="Posts">
      <ul>
        {posts?.map((post) => (
          <li key={post?.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
