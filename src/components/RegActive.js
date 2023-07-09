import React, { useState } from "react";
import MyButton from "./UI/buttons/MyButton";
import useMyPostFething from "../hooks/useMyPostFething";
import Loader from "./UI/loader/Loader";

const RegActive = ({ activeDates, changeYouSign }) => {
  const [cancelOpen, setCancelOpen] = useState("");
  const [cancelDateError, setCancelDateError] = useState(false);
  const [fetchCancelDate] = useMyPostFething(
    "https://bohohome.ru/php/date/cancelDate.php",
    cancelDate
  );

  const cancelClick = function (date) {
    setCancelOpen(!cancelOpen ? date.id : "");
  };

  function cancelDate(res) {
    if (res.data !== "Запись удалена!") setCancelDateError(true);
    changeYouSign((prev) => !prev);
  }

  const cancelClickDate = function (data) {
    const dateForClear = JSON.stringify(data);
    fetchCancelDate(dateForClear);
    setCancelOpen("");
  };

  return (
    <>
      {cancelDateError && (
        <h1 style={{ color: "#000" }}>
          Произошла ошибка. База данных временно не доступна! Попробуйте
          обновить страницу.
        </h1>
      )}

      {activeDates.map(
        (date, index) =>
          index < 2 && (
            <div key={date.id} className="registr__dates-col">
              <div className="registr__dates-row">
                <div>
                  {`${date.date.toLocaleString("ru-RU", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}`}{" "}
                  <br /> {`${date.time.substring(0, 5)}`}
                </div>
                <MyButton
                  className="button articles__btn cancel__btn"
                  onClick={() => cancelClick(date)}
                >
                  Отмена
                </MyButton>
              </div>
              <div
                className={
                  cancelOpen === date.id
                    ? "registr__are-you-sure--vis"
                    : "registr__are-you-sure"
                }
              >
                <span>Вы уверены?</span>
                <MyButton
                  className="button articles__btn cancel__btn are-you-sure__btn"
                  onClick={() => cancelClickDate(date)}
                >
                  Да
                </MyButton>
                <MyButton
                  className="button articles__btn cancel__btn are-you-sure__btn"
                  onClick={() => setCancelOpen("")}
                >
                  Нет
                </MyButton>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default RegActive;
