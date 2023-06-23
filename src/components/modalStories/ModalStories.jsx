import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./ModalStories.css";
import "swiper/css";
import "swiper/css/pagination";

const ModalStories = ({ stories, isModalOpen, toggle }) => {
  return (
    <div className={`modalStories ${isModalOpen ? "open" : ""}`}>
      <div className="modalStories__close" onClick={() => toggle()}>
        X
      </div>
      <div className="container">
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {stories?.map((userStories) => (
            <SwiperSlide key={userStories?.id}>
              <>
                <div className="story__username">{userStories?.username}</div>
                <Swiper
                  className="mySwiper swiper-v"
                  direction={"vertical"}
                  spaceBetween={50}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                >
                  {userStories?.stories?.map((story) => (
                    <SwiperSlide key={story?.id}>
                      <div className="story__image">
                        <img src={story?.src} alt="story" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalStories;
