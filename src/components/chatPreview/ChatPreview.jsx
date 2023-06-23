import { useState } from "react";
import { CameraIcon } from "../../icons";
import "./ChatPreview.css";

const ChatPreview = ({ chatPreview, setUserChat }) => {
  const [chat, setChat] = useState("");

  const onSetChat = (userChat) => {
    setUserChat(userChat);
  };

  const onChatRendering = () => {
    switch (chat) {
      case "":
        return (
          <div className="chatPreview" onClick={() => onSetChat(chatPreview)}>
            <div className="chatPreview__userImage">
              <img src={chatPreview?.participants[1].avatar_url} alt="userImage" />
            </div>
            <div className="chatPreview__text">
              <p className="chatPreview__text--username">{chatPreview?.participants[1].username}</p>
              <p className="chatPreview__text--message">{chatPreview?.messages[0].content}</p>
            </div>
            <div className="chatPreview__cameraLogo">
              <CameraIcon fill={"#00000066"} />
            </div>
          </div>
        );
    }
  };

  return <article>{onChatRendering()}</article>;
};

export default ChatPreview;
