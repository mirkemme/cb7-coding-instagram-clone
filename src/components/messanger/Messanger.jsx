import Message from "../message/Message";
import "./Messanger.css";

const Messanger = ({ messages }) => {
  return (
    <section className="Messages">
      <input className="SearchBar" type="text" placeholder="Search" />
      <ul>
        {messages?.map((message) => (
          <li key={message?.id}>{<Message message={message} />}</li>
        ))}
      </ul>
    </section>
  );
};

export default Messanger;
