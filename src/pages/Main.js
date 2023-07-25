import React, { useEffect } from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import changeBody from "../func/changeBody";
import { useDispatch } from "react-redux";
import { changeNavDarkColor } from "../store/navColorSlice";

function Main({ dbSkills }) {
  const dispatch = useDispatch();
  const addDarkNavColor = () => dispatch(changeNavDarkColor({ state: false }));

  useEffect(() => {
    changeBody(true);
    addDarkNavColor();
  }, []);

  return (
    <div>
      <Header />
      <Skills skills={dbSkills} />
    </div>
  );
}

export default Main;
