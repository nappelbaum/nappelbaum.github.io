import React, { useEffect } from "react";
import changeBody from "../func/changeBody";
import { Link } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import { useDispatch } from "react-redux";
import { changeNavDarkColor } from "../store/navColorSlice";
import { changeNavFix } from "../store/navColorSlice";

const About = () => {
  const dispatch = useDispatch();
  const addDarkNavColor = () => dispatch(changeNavDarkColor({ state: true }));

  useEffect(() => {
    addDarkNavColor();
    dispatch(changeNavFix({ state: false }));
    changeBody(false);
  }, []);

  return (
    <div className="about">
      <div className="container">
        <h1 className="about__h1">Здесь пока ничего нет</h1>
        <h1 className="about__h1">Только аудиоплеер</h1>
        <img
          className="about__img"
          src={require("./../img/cat.jpg")}
          alt="инструктор по сноуборду"
        />
        <AudioPlayer />
      </div>
    </div>
  );
};

export default About;
