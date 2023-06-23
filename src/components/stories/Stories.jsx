import { useState } from "react";
import "./Stories.css";
import Story from "../story";
import ModalStories from "../modalStories";

const Stories = ({ user, stories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="Stories">
        <ul className="Stories__list">
          {stories &&
            stories.map((story) => (
              <li className="Stories__item" key={story.id} onClick={() => toggleModal()}>
                <Story story={story} />
              </li>
            ))}
        </ul>
      </div>
      <ModalStories stories={stories.slice(1, stories?.length)} isModalOpen={isModalOpen} toggle={setIsModalOpen} />
    </>
  );
};

export default Stories;
