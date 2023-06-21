import "./Stories.css";
import Story from "../story";

const Stories = ({ stories }) => {
  return (
    <div className="Stories">
      <ul className="Stories__list">
        {stories &&
          stories.map((story) => (
            <li className="Stories__item" key={story.id}>
              <Story story={story} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stories;
