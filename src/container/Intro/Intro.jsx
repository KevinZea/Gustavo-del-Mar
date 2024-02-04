import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal, mealTwo, videoNuevo } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  const vidRef = React.useRef();
  const video = React.useRef();

  return (
    <div className="videos">

      <div className="app__video">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="app__video">
        <video
          ref={video}
          src={mealTwo}
          type="video/mp4"
          loop
          controls={false}
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlay(!play);
              if (play) {
                video.current.pause();
              } else {
                video.current.play();
              }
            }}
          >
            {play ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="app__video">
        <video
          ref={video}
          src={videoNuevo}
          type="video/mp4"
          loop
          controls={false}
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlay(!play);
              if (play) {
                video.current.pause();
              } else {
                video.current.play();
              }
            }}
          >
            {play ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
