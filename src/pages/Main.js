import React, { useEffect } from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import changeBody from "../func/changeBody";

// import programs from "./data/programs.json";
// import axios from "axios";

// console.log(programs);

// function clickHadler() {
//   fetch("https://bohohome.ru/php/getshop.php", {
//     method: "POST",
//     header: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify({ action: 1 }),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//     });
// }
// clickHadler();

function Main({ dbSkills, changeNavFix, changeNavDarkColor }) {
  useEffect(() => {
    changeNavDarkColor(false);
    changeBody(true);
  }, [changeNavDarkColor]);

  return (
    <div>
      <Header changeNavFix={changeNavFix} />
      <Skills skills={dbSkills} />
    </div>
  );
}

export default Main;
