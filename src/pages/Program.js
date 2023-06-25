import React, { useEffect, useMemo, useState } from "react";
import programs from "./../data/programs";
import { Link, useSearchParams } from "react-router-dom";
import changeBody from "../func/changeBody";

const Program = ({ changeNavFix, changeNavDarkColor }) => {
  const [choiseProg, setChoiseProg] = useState({});
  const [progText, setProgText] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    changeNavFix(false);
    changeNavDarkColor(true);
    changeBody(false);
    const locHref = searchParams.get("id");
    programs.forEach((prog) => {
      if (prog.id === Number(locHref)) setChoiseProg(prog);
    });
  }, [changeNavFix, changeNavDarkColor]);

  useMemo(() => {
    if (choiseProg.text) setProgText(choiseProg.text.split("<br>"));
  }, [choiseProg]);

  return (
    <div className="program">
      <div className="container">
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
    </div>
  );
};

export default Program;
