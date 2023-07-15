import React, { useEffect, useRef } from "react";
import { useState } from "react";
import songsData from "../data/audios";
import SongListWrap from "./SongListWrap";
import SongInputs from "./SongInputs";

const AudioPlayer = () => {
  const audio = useRef();
  const progress = useRef();
  const volumeRang = useRef();
  const [play, setPlay] = useState(true);
  const [volVis, setVolVis] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [loadSongs, setLoadSongs] = useState([]);
  const [currentLoadSong, setCurrentLoadSong] = useState({});
  const [errorload, setErrorload] = useState("");
  const [inputID, setInputID] = useState("");

  useEffect(() => {
    audio.current.volume = 0.15;
  }, []);

  const playPause = function () {
    play ? setPlay(false) : setPlay(true);
  };

  useEffect(() => {
    !play ? audio.current.play() : audio.current.pause();
  }, [play, currentSong, currentLoadSong]);

  const onPlaying = function () {
    const ct = audio.current.currentTime;
    progress.current.value = ct;
    progress.current.max = audio.current.duration;
    volumeRang.current.max = 100;
    volumeRang.current.value = audio.current.volume * 100;
  };

  const skipBackCB = function (data, current, setCurrent) {
    const index = data.findIndex((el) => el.id === current.id);
    if (!index) setCurrent(data[data.length - 1]);
    else setCurrent(data[index - 1]);
  };
  const skipForwardCB = function (data, current, setCurrent) {
    const index = data.findIndex((el) => el.id === current.id);
    if (index === data.length - 1) setCurrent(data[0]);
    else setCurrent(data[index + 1]);
  };

  const skipBack = function () {
    !loadSongs.length
      ? skipBackCB(songsData, currentSong, setCurrentSong)
      : skipBackCB(loadSongs, currentLoadSong, setCurrentLoadSong);
  };
  const skipForward = function () {
    !loadSongs.length
      ? skipForwardCB(songsData, currentSong, setCurrentSong)
      : skipForwardCB(loadSongs, currentLoadSong, setCurrentLoadSong);
  };

  const showFile = function (input) {
    window.URL = window.URL || window.webkitURL;
    setErrorload("");
    const files = input.files;
    let loadSongsArr = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].size < 128400000 && files[i].type === "audio/mpeg") {
        const src = window.URL.createObjectURL(files[i]);
        loadSongsArr.push({
          id: files[i].name + String(new Date().getTime()),
          title: files[i].name.slice(0, -4),
          url: src,
        });
      } else {
        setErrorload((prev) => prev + files[i].name + ", ");
      }
    }

    loadSongsArr.sort((a, b) => a.title.localeCompare(b.title));
    inputID === "new"
      ? setLoadSongs(loadSongsArr)
      : setLoadSongs([...loadSongs, ...loadSongsArr]);
    setCurrentLoadSong(loadSongsArr[0]);
  };

  // const filesArr = Object.values(files);
  // filesArr.length && setIsLoading("Идет загрузка!");
  // let loadSongsArr = [];

  // files.forEach((file, index) => {
  //   if (file.size < 84400000 && file.type === "audio/mpeg") {
  //     const src = window.URL.createObjectURL(file);
  //     console.log(src);
  //     // const reader = new FileReader();
  //     // reader.readAsDataURL(file);
  //     // reader.onload = function () {
  //     //   loadSongsArr.push({
  //     //     id: file.name + String(new Date().getTime()),
  //     //     title: file.name.slice(0, -4),
  //     //     url: reader.result,
  //     //   });
  //     //   console.log(loadSongsArr);
  //     //   loadSongsArr.sort((a, b) => a.title.localeCompare(b.title));
  //     //   inputID === "new"
  //     //     ? setLoadSongs(loadSongsArr)
  //     //     : setLoadSongs([...loadSongs, ...loadSongsArr]);
  //     //   setCurrentLoadSong(loadSongsArr[0]);
  //     // };
  //     // reader.onerror = function () {
  //     //   setIsLoading(`Что-то не так с файлом ${file.name}!`);
  //     // };
  //   } else {
  //     setErrorload((prev) => prev + file.name + ", ");
  //   }
  // });

  document.onclick = function () {
    setVolVis(false);
  };

  return (
    <div className="music-player">
      <audio
        id="audio"
        ref={audio}
        src={
          !loadSongs.length
            ? require(`./../audio/${currentSong.title}.mp3`)
            : currentLoadSong.url
        }
        onTimeUpdate={onPlaying}
        onEnded={skipForward}
        // onLoadedMetadata={(e) => {
        //   volumeRang.current.max = 100;
        //   volumeRang.current.value = e.target.volume * 100;
        // }}
      ></audio>
      <p>{!loadSongs.length ? currentSong.title : currentLoadSong.title}</p>
      <div className="music-player__progress-volume">
        <SongListWrap
          songsData={songsData}
          loadSongs={loadSongs}
          currentSong={currentSong}
          currentLoadSong={currentLoadSong}
          setCurrentSong={setCurrentSong}
          setCurrentLoadSong={setCurrentLoadSong}
        />
        <input
          type="range"
          id="progress"
          ref={progress}
          defaultValue="0"
          onChange={(e) => (audio.current.currentTime = e.target.value)}
        />
        <div className="music-player__volume">
          <i
            className="fa-solid fa-volume-low fa-xl"
            onClick={(e) => {
              setVolVis((prev) => !prev);
              e.stopPropagation();
            }}
          >
            <input
              className={`music-player__vol${
                volVis ? " music-player__vol--vis" : ""
              }`}
              type="range"
              id="volume"
              ref={volumeRang}
              defaultValue="0"
              onChange={(e) => (audio.current.volume = e.target.value / 100)}
              onClick={(e) => e.stopPropagation()}
            />
          </i>
        </div>
      </div>
      <div className="music-player__controls">
        <div onClick={skipBack}>
          <i className="fa-solid fa-backward-step"></i>
        </div>
        <div onClick={playPause}>
          <i className={`fa-solid${play ? " fa-play" : " fa-pause"}`}></i>
        </div>
        <div onClick={skipForward}>
          <i className="fa-solid fa-forward-step"></i>
        </div>
      </div>
      <SongInputs
        showFile={showFile}
        loadSongs={loadSongs}
        setInputID={setInputID}
        setLoadSongs={setLoadSongs}
        setErrorload={setErrorload}
        setPlay={setPlay}
      />
      {errorload && (
        <div className="errorLoad">
          Файлы, не прошедшие проверку (вероятно, превышают 120МБ): {errorload}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
