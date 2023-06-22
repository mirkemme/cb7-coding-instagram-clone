import { CameraIcon, IGTVIcon, LogoIcon, MessangerIcon } from "../../icons";
import "./TopBar.css";

const TopBar = ({ setSection }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  return (
    <div className="TopBar">
      <div className="TopBar__camera" onClick={() => onHandleClick("camera")}>
        <CameraIcon />
      </div>
      <div className="TopBar__logo" onClick={() => onHandleClick("home")}>
        <LogoIcon />
      </div>
      <div className="TopBar__actions">
        <div className="TopBar__actions--IGTV" onClick={() => onHandleClick("IGTV")}>
          <IGTVIcon />
        </div>
        <div className="TopBar__actions--messanger" onClick={() => onHandleClick("messanger")}>
          <MessangerIcon />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
