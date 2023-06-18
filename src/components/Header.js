import React, { useRef, useEffect } from "react";
import "./../sass/main.scss";
import { useInView } from "react-intersection-observer";

const Header = ({ changeNavFix }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    changeNavFix(inView);
  });

  const btnScroll = useRef(null);
  const onButtonClick = () => {
    // console.log(btnScroll.current);
    const btnScrollCoords = btnScroll.current.getBoundingClientRect();
    window.scrollTo({
      top:
        btnScrollCoords.top + window.pageYOffset + btnScrollCoords.height + 70,
      behavior: "smooth",
    });
  };

  return (
    <header ref={ref} className={`header${inView ? "" : " header--margin"}`}>
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
            <button
              className="button header__btn"
              ref={btnScroll}
              onClick={onButtonClick}
            >
              <span>Погнали</span>
              <img src="/img/svg/curve-down-arrow.png" alt="Погнали" />
            </button>
          </div>
          <div className="header__img">
            <img src="/img/main1.png" alt="инструктор по сноуборду" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
