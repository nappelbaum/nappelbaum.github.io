import React from "react";
import FileInput from "./UI/input/FileInput";
import { useState } from "react";

const SongInputs = ({
  showFile,
  loadSongs,
  setInputID,
  setLoadSongs,
  setErrorload,
}) => {
  const [clearFileInput, setClearFileInput] = useState(false);

  return (
    <div className="music-player__file-wrapper">
      <FileInput
        showFile={showFile}
        id="new"
        setInputID={setInputID}
        clearFileInput={clearFileInput}
      >
        Выбрать {loadSongs.length ? "новые" : "свои"} треки
      </FileInput>
      {loadSongs.length !== 0 && (
        <div className="music-player__child-wrapper">
          <FileInput showFile={showFile} id="add" setInputID={setInputID}>
            Добавить треки
          </FileInput>
          <div className="file">
            <button
              className="file__btn file__btn-clean"
              onClick={() => {
                setClearFileInput((prev) => !prev);
                setLoadSongs([]);
                setErrorload("");
              }}
            >
              Очистить список
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongInputs;
