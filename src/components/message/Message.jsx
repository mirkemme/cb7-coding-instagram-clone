import { CameraIcon } from "../../icons";
import "./Message.css";

const Message = ({ message }) => {
  return (
    <article>
      <div className="Message">
        <div className="Message__userImage">
          <img src={message?.userImage} alt="userImage" />
        </div>
        <div className="Message__text">
          <p className="Message__text--username">{message?.username}</p>
          <p className="Message__text--message">{message?.message}</p>
        </div>
        <div className="Message__cameraLogo">
          <CameraIcon fill={"#00000066"} />
        </div>
      </div>
    </article>
  );
};

export default Message;
