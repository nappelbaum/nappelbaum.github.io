import React, { useEffect, useState } from "react";
import HeadProgs from "../components/HeadProgs";
import Articles from "../components/Articles";
import cutProgs from "./../data/cutProgs";
import changeBody from "../func/changeBody";
import { useSearchParams } from "react-router-dom";

const Programs = ({ dbSkills, changeNavFix, changeNavDarkColor }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [catQuery, setCatQuery] = useState(
    searchParams.get("cat") ? searchParams.get("cat") : ""
  );

  useEffect(() => {
    changeNavDarkColor(true);
    changeBody(false);
  }, [changeNavDarkColor]);

  const selectCatQuery = function (select) {
    setCatQuery(select);
  };

  useEffect(() => {
    catQuery ? setSearchParams({ cat: catQuery }) : setSearchParams({});
  }, [catQuery]);

  const inputSearchQuery = function (input) {
    setSearchQuery(input);
  };

  const cutSelectProgs = cutProgs.filter((prog) =>
    prog.category.includes(catQuery)
  );

  const cutSelectFilterProgs = cutSelectProgs.filter(
    (prog) =>
      prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <HeadProgs
        dbSkills={dbSkills}
        catQuery={catQuery}
        selectCatQuery={selectCatQuery}
        searchQuery={searchQuery}
        inputSearchQuery={inputSearchQuery}
        changeNavFix={changeNavFix}
      />
      <Articles programs={cutSelectFilterProgs} searchQuery={searchQuery} />
    </div>
  );
};

export default Programs;
