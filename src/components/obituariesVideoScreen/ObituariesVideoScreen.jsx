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
    <div className={Styles.video_section_Container}>
      <div className={Styles.videoMainContainer}>
        <div className={Styles.borderContainer}>
          <div className={Styles.videoContainer}></div>

          <div className={Styles.videoPlayer}>
            <button onClick={togglePlayer} />
          </div>
        </div>
      </div>

      <div className={Styles.circle}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="180px"
          height="300px"
          viewBox="0 0 300 300"
          xmlSpace="preserve"
          className={Styles.video_svg}
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <g>
            <use
              xlinkHref="#circlePath"
              fill="transparent"
              className={Styles.filledCircle}
            />
            <text fill="#FFFFFF">
              <textPath className={Styles.text_circle} xlinkHref="#circlePath">
                GET A FREE GUIDE & QUOTE
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
