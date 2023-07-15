import React, { useRef, useEffect, useState } from "react";
import "./../sass/main.scss";
import { useInView } from "react-intersection-observer";
import MyButton from "./UI/buttons/MyButton";

const Header = ({ changeNavFix }) => {
  const [active, setActive] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    !entry ? setActive(false) : setActive(!inView);
    changeNavFix(active);
  }, [entry, inView, active, changeNavFix]);

  const btnScroll = useRef(null);
  const onButtonClick = () => {
    const btnScrollCoords = btnScroll.current.getBoundingClientRect();
    window.scrollTo({
      top:
        btnScrollCoords.top + window.pageYOffset + btnScrollCoords.height + 80,
      behavior: "smooth",
    });
  };

  return (
    <header ref={ref} className={`header${!active ? "" : " header--margin"}`}>
      <div className="container">
        <div className="header__row">
          <div className="header__text">
            <div className="category">your snowboard guide</div>
            <h1 className="header__title">
              Привет!
              <br />
              Я ваш персональный <br />
              инструктор по сноуборду))
            </h1>
            <MyButton
              className="button header__btn"
              ref={btnScroll}
              onClick={onButtonClick}
            >
              <span>Погнали</span>
              <img
                src={require("./../img/svg/curve-down-arrow.png")}
                alt="Погнали"
              />
            </MyButton>
          </div>
          <div className="header__img">
            <img
              src={require("./../img/main1.png")}
              alt="инструктор по сноуборду"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
