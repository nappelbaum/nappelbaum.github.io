import React from "react";

const SongList = ({ songsData, setCurrent, currentSong }) => {
  return (
    <ul className="music-player__list">
      {songsData.map((song, index) => (
        <li
          className={`list-item${
            song.id === currentSong.id ? " list-item--active" : ""
          }`}
          key={song.title + String(index)}
          onClick={() => setCurrent(song)}
        >
          <span>{index + 1}. </span>
          <span>{song.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
