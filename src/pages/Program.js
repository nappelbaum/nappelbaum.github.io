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
    const res = await PostService.getAll();
    const locHref = searchParams.get("id");
    res.forEach((prog) => {
      if (prog.id === locHref) setChoiseProg(prog);
    });
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
    if (choiseProg.text) setProgText(choiseProg.text.split("<br>"));
  }, [choiseProg]);

  return (
    <div className="program">
      {progsError && (
        <h1 style={{ color: "#000" }}>
          Произошла ошибка. Статьи не найдены! ${progsError}
        </h1>
      )}
      {isProgsLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="category">your snowboard guide</div>
          <h1>{choiseProg.name}</h1>
          <div>
            {progText.map((el) => (
              <p key={el}>{el}</p>
            ))}
          </div>
          <Link to={choiseProg.href}>
            {choiseProg.href ? "Ссылка на внешний источник" : ""}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Program;
