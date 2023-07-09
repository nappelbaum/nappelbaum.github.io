import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import changeBody from "../func/changeBody";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const Program = ({ changeNavFix, changeNavDarkColor }) => {
  const [choiseProg, setChoiseProg] = useState({});
  const [progText, setProgText] = useState([]);
  const [searchParams] = useSearchParams();
  const [fetchPrograms, isProgsLoading, progsError] = useFetching(async () => {
    const res = await PostService.getProg(searchParams.get("id"));
    setChoiseProg(res);
  });

  useEffect(() => {
    fetchPrograms();
  }, []);

  useEffect(() => {
    changeNavFix(false);
    changeNavDarkColor(true);
    changeBody(false);
  }, [changeNavFix, changeNavDarkColor]);

  useMemo(() => {
    if (choiseProg.text) setProgText(choiseProg.text.split("\n"));
  }, [choiseProg]);

  return (
    <div className="program">
      {progsError && (
        <h1 style={{ color: "#000" }}>
          Произошла ошибка. Статья не найдена! База данных временно не доступна!
          ${progsError}
        </h1>
      )}
      {isProgsLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="category">your snowboard guide</div>
          <h1>{choiseProg.name}</h1>
          <div>
            {progText.map((el, index) => (
              <p key={`p_${index}`} style={{ marginBottom: "10px" }}>
                {el}
              </p>
            ))}
          </div>
          <Link to={choiseProg.href} target="_blank">
            {choiseProg.href ? "Ссылка на внешний источник" : ""}
          </Link>
          <Link
            className="button articles__btn edit__btn"
            to={`/admin?id=${choiseProg.id}`}
          >
            Edit
          </Link>
        </div>
      )}
    </div>
  );
};

export default Program;
