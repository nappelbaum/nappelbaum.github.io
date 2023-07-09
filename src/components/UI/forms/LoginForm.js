import React from "react";
import MyInput from "../input/MyInput";
import MyButton from "../buttons/MyButton";

const LoginForm = ({ errCaption, errCaptionReg, registr, ...props }) => {
  return (
    <form {...props}>
      <label>
        Ваш логин: <MyInput className="search-input" name="username" />
      </label>
      <label>
        Пароль:{" "}
        <MyInput className="search-input" type="password" name="password" />
      </label>
      {registr && (
        <label>
          Номер граммофона: <MyInput className="search-input" name="phone" />
        </label>
      )}
      <div style={{ color: "#000", fontWeight: 600, marginBottom: "15px" }}>
        {!registr ? errCaption : errCaptionReg}
      </div>
      <MyButton className="button articles__btn login-form__btn" type="submit">
        {!registr ? "Войти" : "Зарегистрироваться"}
      </MyButton>
    </form>
  );
};

export default LoginForm;
