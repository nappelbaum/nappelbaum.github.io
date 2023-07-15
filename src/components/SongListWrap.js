import React from "react";
import SongList from "./SongList";
import { useState } from "react";

const SongListWrap = ({
  songsData,
  loadSongs,
  currentSong,
  currentLoadSong,
  setCurrentSong,
  setCurrentLoadSong,
}) => {
  const [listVis, setListVis] = useState(false);

  return (
    <div className="music-player__fa-list">
      <i
        className="fa-solid fa-list fa-xl"
        onClick={() => setListVis((prev) => !prev)}
      ></i>
      <div
        className={`music-player__list-wrapper${
          listVis ? " music-player__list-wrapper--vis" : ""
        }`}
      >
        <button
          className="list-modal-close"
          onClick={() => setListVis(false)}
        ></button>
        {!loadSongs.length ? (
          <SongList
            songsData={songsData}
            setCurrent={setCurrentSong}
            currentSong={currentSong}
          />
        ) : (
          <SongList
            songsData={loadSongs}
            setCurrent={setCurrentLoadSong}
            currentSong={currentLoadSong}
          />
        )}
      </div>
    </div>
  );
};

export default SongListWrap;
