import React, { useEffect } from "react";
import changeBody from "../func/changeBody";
import { Link } from "react-router-dom";

const About = ({ changeNavFix, changeNavDarkColor }) => {
  useEffect(() => {
    changeNavFix(false);
    changeNavDarkColor(true);
    changeBody(false);
  }, [changeNavFix, changeNavDarkColor]);

  return (
    <div>
      <div className="container">
        <h1 className="about__h1">Здесь пока ничего нет</h1>
        <img
          className="about__img"
          src={require("./../img/cat.jpg")}
          alt="инструктор по сноуборду"
        />
        <div className="about__links">
          Доступны разделы: <br />
          <Link to="/">Главная</Link>, <Link to="/progs">Программы</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
