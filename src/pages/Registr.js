import React, { useEffect, useState } from "react";
import changeBody from "../func/changeBody";
import { useAuth } from "../hooks/useAuth";
import MyButton from "../components/UI/buttons/MyButton";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Entry from "../components/Entry.js";
import RegModal from "../components/RegModal";
import Loader from "../components/UI/loader/Loader";
import useMyFetching from "../hooks/useMyFetching";
import RegActive from "../components/RegActive";

const Registr = ({ changeNavFix, changeNavDarkColor }) => {
  useEffect(() => {
    changeNavFix(false);
    changeNavDarkColor(true);
    changeBody(false);
  }, [changeNavFix, changeNavDarkColor]);

  const navigate = useNavigate();
  const { user, signout } = useAuth();
  const [cookies, removeCookie] = useCookies(["snowid"]);
  const [dates, setDates] = useState([]);
  const [activeDates, setActiveDates] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [idDateTime, setIdDateTime] = useState({});
  const [youSign, setYouSign] = useState(false);
  const [limitCoord, setLimitCoord] = useState({});
  const [fetchDate, isDateLoading, dateError] = useMyFetching(
    "https://bohohome.ru/php/date/getDate.php",
    getDateTime
  );

  const changeActiveModal = (activeMod, time) => {
    setActiveModal(activeMod);
    setIdDateTime(time);
    // document.body.classList.toggle("lock");
  };

  const changeYouSign = (sign) => {
    setYouSign(sign);
  };

  const changeLimitCoord = (limit) => {
    setLimitCoord(Object.keys(limitCoord).length === 0 ? limit : {});
  };

  window.addEventListener("scroll", function (e) {
    setLimitCoord({});
  });

  function getDateTime(res) {
    const cutData = res.data.filter(
      (date) => new Date(`${date.date} ${date.time}`) > new Date()
    );
    const activData = cutData.filter((date) => date.user_id === user.id);
    activData.forEach((el) => (el.date = new Date(el.date)));
    activData.sort(compare);
    setActiveDates(activData);

    const emptyData = cutData.filter((date) => !date.user_id);
    emptyData.forEach((el) => (el.date = new Date(el.date)));
    emptyData.sort(compare);
    function compare(a, b) {
      return a.date - b.date;
    }

    let newData = [];
    let tempData = [emptyData[0]];
    for (let i = 1; i < emptyData.length; i++) {
      if (emptyData[i].date.getTime() === emptyData[i - 1].date.getTime()) {
        tempData.push(emptyData[i]);
      } else {
        newData.push(tempData);
        tempData = [emptyData[i]];
      }
    }
    newData.push(tempData);

    function compare1(a, b) {
      return a.time.substring(0, 2) - b.time.substring(0, 2);
    }
    newData.forEach((el) => {
      const sortDate = el.sort(compare1);
      el = sortDate;
    });

    setDates(newData);
  }

  useEffect(() => {
    fetchDate();
  }, [youSign]);

  return (
    <div className="registr" onClick={() => setLimitCoord({})}>
      {dateError && (
        <h1 style={{ color: "#000" }}>
          Произошла ошибка. База данных временно не доступна! Попробуйте
          обновить страницу.
        </h1>
      )}
      {isDateLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="container container__registr">
            <div className="registr__hi">ПРИВЕТ, {user.login}!</div>
            <div className="registr__active-reg">
              Ваши активные записи (максимум 2 записи):
              <div>{activeDates.length === 0 && "пока нет записей"}</div>
              {activeDates.length !== 0 && (
                <RegActive
                  activeDates={activeDates}
                  changeYouSign={changeYouSign}
                />
              )}
            </div>
            <div className="registr__choise-reg">
              Для записи выберите свободные дату и время <br />
              (длительность занятия - 1 час):
            </div>
            <div className="registr__wrapper">
              {dates.map((date) => (
                <Entry
                  date={date}
                  changeActiveModal={changeActiveModal}
                  activeDates={activeDates}
                  changeLimitCoord={changeLimitCoord}
                  key={date[0].id}
                />
              ))}
              {Object.keys(limitCoord).length > 0 && (
                <div
                  className="registr__limit-caption"
                  style={{ top: limitCoord.y + 20, left: limitCoord.x - 75 }}
                >
                  Достигнут лимит записей
                </div>
              )}
            </div>
            <MyButton
              className="button articles__btn reg__btn"
              onClick={() =>
                signout(() => {
                  removeCookie("snowid");
                  navigate("/reg", { replace: true });
                })
              }
            >
              Выйти из аккаунта
            </MyButton>
          </div>
          <RegModal
            activeModal={activeModal}
            changeActiveModal={changeActiveModal}
            idDateTime={idDateTime}
            user={user}
            changeYouSign={changeYouSign}
          />
        </div>
      )}
    </div>
  );
};

export default Registr;
