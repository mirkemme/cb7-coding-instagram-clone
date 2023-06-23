import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { GET } from "./utils/http";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TopBar from "./components/topBar";
import HomePage from "./components/homePage";
import Camera from "./components/camera/Camera";
import Messanger from "./components/messanger/Messanger";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    GET("https://api.npoint.io/8d6966977a25ae908ac4").then((data) => setStories(data));
    GET("https://api.npoint.io/026054c23bca04aeb3e7").then((data) => setPosts(data));
    GET("https://api.npoint.io/45615d0ddef177eef95b").then((data) => setConversations(data.messageList));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return <HomePage stories={stories} posts={posts} />;
      case "camera":
        return <Camera />;
      case "IGTV":
        return <h1>IGTV</h1>;
      case "messanger":
        return <Messanger conversations={conversations} />;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
    </>
  );
}

export default App;
