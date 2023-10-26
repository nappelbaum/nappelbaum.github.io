import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import changeBody from "../func/changeBody";
import { useAuth } from "../hooks/useAuth";
import MyButton from "../components/UI/buttons/MyButton";
import { useCookies } from "react-cookie";
import axios from "axios";
import LoginForm from "../components/UI/forms/LoginForm";
import Loader from "../components/UI/loader/Loader";
import { useDispatch } from "react-redux";
import { changeNavDarkColor } from "../store/navColorSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const [errCaption, setErrCaption] = useState("");
  const [errCaptionReg, setErrCaptionReg] = useState("");
  const [regFormVis, setRegFormVis] = useState(false);
  const [cookies, setCookie] = useCookies(["snowid"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(changeNavDarkColor({ state: true }));
    changeBody(false);
  }, []);

  const fromPage = location.state?.from || "/";
  const isAdmin = fromPage.slice(0, 6);
  const d = new Date();
  d.setTime(d.getTime() + 168 * 60 * 60 * 1000);

  const changeCookie = (id) => {
    setCookie("snowid", id, {
      path: "/snowboard", // for Git: path: "/snowboard"
      expires: d,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    axios
      .post("https://bohohome.ru/php/adminLogin.php", formData)
      .then((res) => {
        if (typeof res.data === "object") {
          if (isAdmin === "/admin") {
            if (res.data.access === "admin") {
              signin(res.data, () => navigate(fromPage, { replace: true }));
              changeCookie(res.data.hashid);
              setLoading(false);
            } else {
              setErrCaption("Доступ только для admin");
              if (cookies.snowid !== "undefined") changeCookie(res.data.hashid);
              setLoading(false);
            }
          } else {
            signin(res.data, () => navigate(fromPage, { replace: true }));
            changeCookie(res.data.hashid);
            setLoading(false);
          }
        } else if (typeof res.data === "string") {
          setErrCaption(res.data);
          setLoading(false);
        }
      });
  };

  const regSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    axios
      .post("https://bohohome.ru/php/userAddLogin.php", formData)
      .then((res) => {
        if (res.data === "Success") {
          axios
            .post("https://bohohome.ru/php/adminLogin.php", formData)
            .then((res) => {
              if (typeof res.data === "object") {
                signin(res.data, () => navigate(fromPage, { replace: true }));
                changeCookie(res.data.hashid);
                setLoading(false);
              }
            });
        } else {
          setErrCaptionReg(res.data);
          setLoading(false);
        }
      });
  };

  return (
    <div className="login">
      {loading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      <div className="container container__login">
        <h1>
          {isAdmin === "/admin"
            ? "Admin only Login page"
            : "Войти или зарегистрироваться"}
        </h1>
        <LoginForm
          className="login-form"
          onSubmit={handleSubmit}
          errCaption={errCaption}
          registr={false}
        />

        {isAdmin !== "/admin" && (
          <>
            <div className="login-line"></div>
            <MyButton
              className="button articles__btn reg__btn"
              onClick={() => setRegFormVis((prev) => !prev)}
            >
              Регистрация
            </MyButton>
            <LoginForm
              className={`reg-form${regFormVis ? " reg-form--vis" : ""}`}
              onSubmit={regSubmit}
              errCaptionReg={errCaptionReg}
              registr={true}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
