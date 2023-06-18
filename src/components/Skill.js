import React, { useState } from "react";
import "./../sass/main.scss";

const Skill = ({ category, text, href, src, skillRight }) => {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <div className="skill">
      <div className={`skill__text${skillRight}`}>
        <div className="category" onClick={() => setShowSkill((prev) => !prev)}>
          {category}
        </div>
        <div
          className={`skill__text-wrapper${
            showSkill === false ? "" : " skill__text-wrapper--vis"
          }`}
        >
          <p>{text}</p>
          <div className="skill__links">
            <a href={href}>Подробнее о программе</a>
            <a href="#">Записаться на занятие</a>
          </div>
        </div>
      </div>
      <div className="skill__img">
        <img
          src={require(`./../img/Carts/${src}`)}
          alt="инструктор по сноуборду"
        />
      </div>
    </div>
  );
};

export default Skill;
