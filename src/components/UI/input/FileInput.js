import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const FileInput = ({ children, showFile, id, setInputID, clearFileInput }) => {
  const fileInput = useRef();

  useEffect(() => {
    console.log(fileInput.current.files);
    const file = new File(["text"], "primer.txt", { type: "text/plain" });
    const dt = new DataTransfer();
    dt.items.add(file);
    const file_list = dt.files;
    fileInput.current.files = file_list;
    console.log(fileInput.current.files);
  }, [clearFileInput]);

  return (
    <div className="file">
      <input
        ref={fileInput}
        type="file"
        multiple
        accept=".mp3"
        id={id}
        className="file__input"
        title=""
        onChange={(e) => showFile(e.target)}
        onClick={(e) => setInputID(e.target.id)}
      />
      <button className="file__btn">{children}</button>
    </div>
  );
};

export default FileInput;
