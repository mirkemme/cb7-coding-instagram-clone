import Posts from "../posts";
import Stories from "../stories";
import "./HomePage.css";

const HomePage = ({ stories, posts }) => {
  return (
    <>
      <Stories stories={stories} />
      <Posts posts={posts} />
    </>
  );
};

export default HomePage;
