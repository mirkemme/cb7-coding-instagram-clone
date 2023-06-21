import { useState } from "react";
import "./Post.css";
import { LikeIcon } from "../../icons";

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.isLike);
  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <img className="PostTop--userImage" src={post?.userImage} alt="" />
        <div className="PostTop__userInfo">
          <p className="PostTop__userInfo--username">{post?.userName}</p>
          <p className="PostTop__userInfo--location">{post?.location}</p>
        </div>
      </div>
      <div className="PostContent">
        {post?.media?.map((media) => (
          <img className="PostContent--image" key={media?.id} src={media?.src}></img>
        ))}
      </div>
      <div className="PostActions" onClick={() => toggleLike()}>
        <LikeIcon fill={like ? "#ff0000" : "none#333333"} />
      </div>
    </article>
  );
};

export default Post;
