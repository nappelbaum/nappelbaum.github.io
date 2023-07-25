import React, { useEffect } from "react";
import changeBody from "../func/changeBody";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeNavDarkColor } from "../store/navColorSlice";
import { changeNavFix } from "../store/navColorSlice";

const Reg = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavFix({ state: false }));
    dispatch(changeNavDarkColor({ state: true }));
    changeBody(false);
  }, []);

  return (
    <div className="reg">
      <div className="container">
        <div className="reg__row">
          <div className="reg__img">
            <img src={require("./../img/fon2.jpg")} alt="Сноуборд" />
          </div>
          <div className="reg__header">
            <div className="category">your snowboard guide</div>
            <h1 className="reg__header__title">
              Вы можете записаться на занятие...
            </h1>
            <div className="reg__tel">
              ...по телефону +7 999 888-77-666 (whatsapp, telegram)
            </div>
            <div className="reg__date">
              ...или выберите дату и время прямо здесь:
            </div>
            <Link to="/registr" className="button articles__btn reg__butn">
              Мои записи
            </Link>
          </div>
          <div className="reg__img">
            <img src={require("./../img/fon2.jpg")} alt="Snowboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
