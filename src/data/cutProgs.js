import programs from "./programs";

const progsTmp = JSON.parse(JSON.stringify(programs));

const cutProgs = progsTmp.map((program) => {
  const textLength = 170;
  const text = program.text.split("<br>");
  const textCut = text[0].slice(0, textLength);
  let textArr = textCut.split(" ");
  if (textCut.length === textLength) {
    textArr.pop();
  }
  textArr.push(". . .");
  program.text = textArr.join(" ");
  return program;
});

export default cutProgs;
