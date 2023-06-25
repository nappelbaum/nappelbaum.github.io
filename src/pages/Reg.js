import React, { useEffect } from "react";
import changeBody from "../func/changeBody";

const Reg = ({ changeNavFix, changeNavDarkColor }) => {
  useEffect(() => {
    changeNavFix(false);
    changeNavDarkColor(true);
    changeBody(false);
  }, [changeNavFix, changeNavDarkColor]);

  return (
    <div className="reg">
      <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default Reg;
