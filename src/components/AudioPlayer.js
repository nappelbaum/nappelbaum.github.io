import React, { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audio = useRef();
  useEffect(() => {
    audio.current.volume = 0.15;
  }, []);

  return (
    <div className="music-player">
      <audio controls id="audio" ref={audio}>
        <source src={require("./../audio/Landyshi_-_Snoubordist.mp3")} />
      </audio>
      {/* <input type="range" id="progress" />
      <div className="music-player__controls">
        <div></div>
      </div> */}
    </div>
  );
};

export default AudioPlayer;
