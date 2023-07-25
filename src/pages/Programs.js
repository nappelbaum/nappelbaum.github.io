import React, { useEffect, useMemo, useState } from "react";
import HeadProgs from "../components/HeadProgs";
import Articles from "../components/Articles";
import cutProgsFunc from "./../data/cutProgs";
import changeBody from "../func/changeBody";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../components/UI/loader/Loader";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { useDispatch } from "react-redux";
import { changeNavDarkColor } from "../store/navColorSlice";

const Programs = ({ dbSkills }) => {
  const dispatch = useDispatch();
  const addDarkNavColor = () => dispatch(changeNavDarkColor({ state: true }));
  const [cutProgs, setCutProgs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const [catQuery, setCatQuery] = useState(
    searchParams.get("cat") ? searchParams.get("cat") : ""
  );
  const navigate = useNavigate();
  const [fetchPrograms, isProgsLoading, progsError] = useFetching(async () => {
    const res = await PostService.getAll();
    setCutProgs(cutProgsFunc(res));
  });

  useEffect(() => {
    fetchPrograms();
  }, []);

  const selectCatQuery = function (select) {
    setCatQuery(select);
  };

  const inputSearchQuery = function (input) {
    setSearchQuery(input);
  };

  useEffect(() => {
    addDarkNavColor();
    changeBody(false);
  }, []);

  useEffect(() => {
    if (searchParams.get("cat")) navigate("/progs", { replace: true });
  }, [navigate, searchParams]);

  const cutSelectProgs = useMemo(() => {
    return cutProgs.filter((prog) => prog.category.includes(catQuery));
  }, [catQuery, cutProgs]);

  const cutSelectFilterProgs = useMemo(() => {
    return cutSelectProgs.filter(
      (prog) =>
        prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, cutSelectProgs]);

  return (
    <div>
      <HeadProgs
        dbSkills={dbSkills}
        catQuery={catQuery}
        selectCatQuery={selectCatQuery}
        searchQuery={searchQuery}
        inputSearchQuery={inputSearchQuery}
      />
      {progsError && (
        <h1 style={{ color: "#000" }}>
          Произошла ошибка. Статьи не найдены! База данных временно не доступна!
          ${progsError}
        </h1>
      )}
      {isProgsLoading ? (
        <Loader />
      ) : (
        <Articles programs={cutSelectFilterProgs} searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default Programs;
