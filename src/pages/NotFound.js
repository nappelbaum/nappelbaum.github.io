import React, { useEffect } from "react";
import changeBody from "../func/changeBody";

const NotFound = () => {
  useEffect(() => {
    changeBody(true);
  }, []);

  return (
    <div
      style={{
        color: "#000",
        fontSize: "20px",
        fontWeight: 700,
        margin: "40px auto",
      }}
    >
      Страницы не существует!
    </div>
  );
};

export default NotFound;
