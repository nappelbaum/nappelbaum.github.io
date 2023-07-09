import React, { useRef, useState } from "react";
import MyButton from "./UI/buttons/MyButton";
import axios from "axios";

const RegModal = ({
  activeModal,
  changeActiveModal,
  idDateTime,
  user,
  changeYouSign,
}) => {
  const [youSign, setYouSign] = useState(false);
  const [captionDate, setCaptionDate] = useState("");

  const onSumbit = function (e) {
    e.preventDefault();
    e.target.classList.remove("reg-modal__form--anim");
    const formData = new FormData(e.target);
    formData.append("id", idDateTime.id);
    formData.append("user_id", user.id);
    e.target.reset();

    axios
      .post("https://bohohome.ru/php/date/updateDate.php", formData)
      .then((res) => {
        setYouSign(true);
        setCaptionDate(res.data);
        changeYouSign((prev) => !prev);
        setTimeout(() => {
          changeActiveModal(false, {});
          document.body.classList.remove("lock");
          setYouSign(false);
        }, 2500);
      });
  };

  return (
    <div className={`reg-modal${!activeModal ? " visually-hidden" : ""}`}>
      <form
        className={`reg-modal__form${
          activeModal ? " reg-modal__form--anim" : ""
        }`}
        onSubmit={onSumbit}
      >
        <button
          className="reg-modal__close"
          onClick={(e) => {
            e.preventDefault();
            changeActiveModal(false, {});
            document.body.classList.remove("lock");
            setYouSign(false);
          }}
        ></button>
        <div>
          Дата и время:
          {activeModal && (
            <span>{` ${idDateTime.date.toLocaleString("ru-RU", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })} ${idDateTime.time.substring(0, 5)}`}</span>
          )}
        </div>
        <div>
          Ваш контактный граммофон <span>{user.phone}</span>
        </div>
        <label>
          <span>Добавьте комментарий при желании:</span>
          <textarea
            className="search-input reg-modal__texarea"
            rows="6"
            name="comment"
          />
        </label>
        {youSign && <div className="you-sign">{captionDate}</div>}
        <MyButton
          className="button articles__btn login-form__btn"
          type="submit"
          disabled={youSign}
        >
          Подтвердить запись
        </MyButton>
      </form>
      <div
        className="reg-modal__overlay"
        onClick={(e) => {
          changeActiveModal(false, {});
          document.body.classList.remove("lock");
          setYouSign(false);
        }}
      ></div>
    </div>
  );
};

export default RegModal;
