import { useState } from "react";
import { LikeIcon } from "../../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Post.css";
import "swiper/css";
import "swiper/css/pagination";

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
        <Swiper pagination={true} modules={[Pagination]}>
          {post?.media?.map((media) => (
            <SwiperSlide key={media?.id}>
              <div className="container">
                <img className="PostContent--image" src={media?.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="PostActions" onClick={() => toggleLike()}>
        <LikeIcon fill={like ? "#ff0000" : "none#333333"} />
      </div>
    </article>
  );
};

export default Post;
