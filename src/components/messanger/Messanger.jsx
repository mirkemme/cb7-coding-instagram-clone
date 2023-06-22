import { useState } from "react";
import ChatPreview from "../chatPreview/ChatPreview";
import "./Messanger.css";
import Chat from "../../chat/Chat";

const Messanger = ({ conversations }) => {
  const [messanger, setMessanger] = useState("active");

  const onMessangerRender = () => {
    if (messanger === "active")
      return (
        <section className="Messanger">
          <input className="SearchBar" type="text" placeholder="Search" />
          <ul>
            {conversations?.map((chatPreview) => (
              <li key={chatPreview?.id}>{<ChatPreview chatPreview={chatPreview} setMessanger={setMessanger} />}</li>
            ))}
          </ul>
        </section>
      );
    else return <Chat />;
  };

  return <>{onMessangerRender()}</>;
};

export default Messanger;
