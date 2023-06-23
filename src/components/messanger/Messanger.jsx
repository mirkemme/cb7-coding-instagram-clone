import { useState, useRef } from "react";
import "./Messanger.css";
import ChatPreview from "../chatPreview/ChatPreview";
import Chat from "../chat/Chat";

const Messanger = ({ conversations }) => {
  const [userChat, setUserChat] = useState("");

  const onMessangerRender = () => {
    if (userChat === "")
      return (
        <section className="Messanger">
          <input className="SearchBar" type="text" placeholder="Search" />
          <ul>
            {conversations?.map((chatPreview) => (
              <li key={chatPreview?.id}>{<ChatPreview chatPreview={chatPreview} setUserChat={setUserChat} />}</li>
            ))}
          </ul>
        </section>
      );
    else return <Chat userChat={userChat} />;
  };

  return <>{onMessangerRender()}</>;
};

export default Messanger;
