import { useEffect, useState } from "react";
import "./App.css";
import TopBar from "./components/topBar";
import HomePage from "./components/homePage";
import Camera from "./components/camera/Camera";
import Messanger from "./components/messanger/Messanger";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/7995f380b0b66214d835")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  useEffect(() => {
    fetch("https://api.npoint.io/c59d0538fafba6432ffe")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    fetch("https://api.npoint.io/cc36d685c811173fa18a")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return <HomePage stories={stories} posts={posts} />;
      case "camera":
        return <Camera />;
      case "IGTV":
        return <h1>IGTV</h1>;
      case "messenger":
        return <Messanger messages={messages} />;
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
