import { useState } from "react";
import { CameraIcon } from "../../icons";
import "./ChatPreview.css";
import Chat from "../../chat/Chat";
import Messanger from "../messanger/Messanger";

const ChatPreview = ({ chatPreview, setMessanger }) => {
  const [chat, setChat] = useState("");

  const onSetChat = (participantUsername) => {
    setChat(participantUsername);
  };

  const onChatRendering = () => {
    switch (chat) {
      case "":
        return (
          <div className="chatPreview" onClick={() => onSetChat(chatPreview?.participants[1].username)}>
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
      case "Emily":
        return (
          <>
            {setMessanger("")}
            <Messanger />
          </>
        );
    }
  };

  return <article>{onChatRendering()}</article>;
};

export default ChatPreview;
