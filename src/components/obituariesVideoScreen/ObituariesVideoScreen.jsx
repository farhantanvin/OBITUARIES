import { useState } from "react";
import Styles from "./obituariesVideoScreen.module.scss";

export default function ObituariesVideoComponent() {
  const id = "Isuns4qj2MI";
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  const togglePlayer = () => {
    !status ? setStatus(true) : setStatus(false);
  };

  return (
    <div className={Styles.videoMainContainer}>
      <div className={Styles.borderContainer}>
        <div className={Styles.videoContainer}></div>
        <div className={Styles.videoPlayer}>
          <button onClick={togglePlayer} />
        </div>
      </div>
    </div>
  );
}
