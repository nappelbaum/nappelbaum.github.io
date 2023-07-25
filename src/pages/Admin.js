import React, { useEffect, useMemo, useRef, useState } from "react";
import changeBody from "../func/changeBody";
import { useNavigate, useSearchParams } from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/buttons/MyButton";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import AddEditService from "../API/AddEditService";
import { useAuth } from "../hooks/useAuth";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { changeNavDarkColor } from "../store/navColorSlice";

const Admin = ({ dbSkills }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavDarkColor({ state: true }));
    changeBody(false);
  }, []);

  const [addCat, setAddCat] = useState("");
  const [searchParams] = useSearchParams();
  const [choiseProg, setChoiseProg] = useState({});
  const [fetchPrograms] = useFetching(async () => {
    if (searchParams.get("id")) {
      const res = await PostService.getProg(searchParams.get("id"));
      setChoiseProg(res);
    }
  });
  const [visBtns, setVisBtns] = useState(false);
  const myForm = useRef();
  const delBtn = useRef();
  const [pageExist, setPageExist] = useState(true);
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["snowid"]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  useMemo(() => {
    if (choiseProg.category) setAddCat(choiseProg.category);
    choiseProg.id ? setPageExist(true) : setPageExist(false);
    if (!searchParams.get("id")) setPageExist(true);
  }, [choiseProg, searchParams]);

  const onSumbit = function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (searchParams.get("id")) {
      formData.append("id", choiseProg.id);
      if (e.target.className === "admin__add-prog-form")
        AddEditService("https://bohohome.ru/php/programsEdit.php", formData);
      else {
        if (!visBtns) {
          setVisBtns(true);
        } else {
          setVisBtns(false);
          AddEditService(
            "https://bohohome.ru/php/programsDelete.php",
            formData,
            "Статья удалена!",
            myForm,
            setAddCat
          );
        }
      }
    } else {
      AddEditService(
        "https://bohohome.ru/php/programsAdd.php",
        formData,
        "Данные готовы к отправке! Данные отправлены в базу данных!",
        myForm,
        setAddCat
      );
    }
  };

  const noDelete = function (e) {
    e.preventDefault();
    setVisBtns(false);
  };

  return (
    <div className="admin">
      {pageExist && (
        <div className="container">
          <div className="admin__row">
            <div>
              <div className="admin__hi">Привет, {user.login}!</div>
              <div className="admin__header">
                {!searchParams.get("id") ? "Добавить" : "Изменить"} статью
              </div>
              <form
                className="admin__add-prog-form"
                onSubmit={onSumbit}
                ref={myForm}
              >
                <MyInput
                  className="search-input"
                  type="text"
                  name="name"
                  defaultValue={!searchParams.get("id") ? "" : choiseProg.name}
                  placeholder="Название статьи..."
                />
                <div className="admin__btns">
                  {dbSkills.map((skill) => (
                    <MyButton
                      key={skill.id}
                      className="button articles__btn admin__cat-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        if (!addCat.includes(skill.href))
                          setAddCat(addCat + `${skill.href},`);
                      }}
                    >
                      {skill.cat}
                    </MyButton>
                  ))}
                  <MyButton
                    className="button articles__btn admin__cat-btn--clear"
                    onClick={(e) => {
                      e.preventDefault();
                      setAddCat("");
                    }}
                  >
                    Clear!
                  </MyButton>
                </div>
                <MyInput
                  className="search-input"
                  type="text"
                  name="category"
                  value={addCat}
                  readOnly
                  placeholder="Категории..."
                />
                <textarea
                  className="search-input"
                  name="text"
                  defaultValue={!searchParams.get("id") ? "" : choiseProg.text}
                  placeholder="Текст..."
                ></textarea>
                <MyInput
                  className="search-input"
                  type="text"
                  name="href"
                  defaultValue={!searchParams.get("id") ? "" : choiseProg.href}
                  placeholder="Ссылка(если есть)..."
                />
                <MyButton className="button articles__btn">Отправить</MyButton>
              </form>
              {searchParams.get("id") && (
                <form className="admin__del-prog-form" onSubmit={onSumbit}>
                  <MyButton
                    className={`button articles__btn${
                      !visBtns ? "" : " del-btn--hidden"
                    }`}
                    ref={delBtn}
                  >
                    Удалить статью
                  </MyButton>
                  {visBtns && (
                    <div>
                      <p>Вы уверены?</p>
                      <MyButton className="button articles__btn">Да</MyButton>
                      <MyButton
                        className="button articles__btn"
                        onClick={noDelete}
                      >
                        Нет
                      </MyButton>
                    </div>
                  )}
                </form>
              )}
            </div>
            <MyButton
              className="button articles__btn"
              onClick={() => {
                removeCookie("snowid");
                signout(() => navigate("/progs", { replace: true }));
              }}
            >
              Log Out
            </MyButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
