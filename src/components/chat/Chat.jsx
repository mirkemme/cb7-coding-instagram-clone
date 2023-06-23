import "./Chat.css";

const Chat = ({ userChat }) => {
  const onRenderChat = () => {
    return (
      <>
        {userChat.messages.map((message) =>
          message.sender === userChat.participants[0].username ? (
            <p key={message.id} className="messageOnRight">
              {message.content}
            </p>
          ) : (
            <div key={message.id} className="messageOnLeft">
              <img className="messageOnLeft--userImage" src={userChat.participants[1].avatar_url}></img>
              <p className="messageOnLeft--text">{message.content}</p>
            </div>
          )
        )}
      </>
    );
  };

  return <div className="Chat">{onRenderChat()}</div>;
};

export default Chat;
