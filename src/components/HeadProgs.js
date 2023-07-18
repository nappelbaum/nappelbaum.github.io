import React, { useEffect, useState } from "react";

import MyInput from "./UI/input/MyInput";
import { useInView } from "react-intersection-observer";
import SelectStyle from "./UI/select/SelectStyle";

const HeadProgs = ({
  dbSkills,
  catQuery,
  selectCatQuery,
  searchQuery,
  inputSearchQuery,
  changeNavFix,
}) => {
  const [active, setActive] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    !entry ? setActive(false) : setActive(!inView);
    changeNavFix(active);
  }, [entry, inView, active, changeNavFix]);

  const [catCaption, setCatCaption] = useState("");
  useEffect(() => {
    dbSkills.forEach((skill) => {
      if (skill.href === catQuery) setCatCaption(skill.cat);
    });
  }, [catCaption, catQuery, dbSkills]);

  return (
    <header ref={ref} className="head-progs">
      <div className="container">
        <div className="head-progs__row">
          <div className="head-progs__img">
            <img
              src={require("./../img/main3.png")}
              alt="инструктор по сноуборду"
            />
          </div>
          <div className="head-progs__text">
            <div className="category">your snowboard guide</div>
            <h1 className="head-progs__title">
              Здесь программы тренировок и интересные статьи про сноуборд
            </h1>
          </div>
        </div>
        <div className="select-input-row">
          <SelectStyle
            className="cat-select"
            defaultval="Все категории..."
            options={dbSkills}
            catQuery={catQuery}
            selectCatQuery={selectCatQuery}
            catCaption={catCaption}
          />
          <form
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
              e.target.scrollIntoView({ block: "start", behavior: "smooth" });
            }}
          >
            <MyInput
              className="search-input"
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => inputSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <div
          className={
            !catQuery ? "head-progs__caption" : "head-progs__caption--vis"
          }
        >
          Показаны статьи из категории {catCaption}!
        </div>
      </div>
    </header>
  );
};

export default HeadProgs;
