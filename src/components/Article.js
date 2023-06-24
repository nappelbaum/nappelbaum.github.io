import React from "react";
import { Link } from "react-router-dom";

const Article = ({ program, index, searchQuery }) => {
  const regExp = new RegExp(searchQuery, "gi");
  const titleNew = program.name;
  const textNew = program.text;
  const span = document.createElement("span");
  span.classList.add("text-red");
  function repl(match) {
    span.innerHTML = match;
    return span.outerHTML;
  }
  let articleTitle, articleText;
  if (searchQuery === "") {
    articleTitle = { __html: `${index + 1}. ${titleNew}` };
    articleText = { __html: `${textNew}` };
  } else {
    articleTitle = {
      __html: `${index + 1}. ${titleNew.replace(regExp, repl)}`,
    };
    articleText = {
      __html: `${textNew.replace(regExp, repl)}`,
    };
  }

  return (
    <article className="article">
      <div className="article__text">
        <div
          className="article__title"
          dangerouslySetInnerHTML={articleTitle}
        ></div>
        <div
          className="article__caption"
          dangerouslySetInnerHTML={articleText}
        ></div>
      </div>
      <Link
        to={`/prog?${program.id}`}
        className="button articles__btn"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        Открыть
      </Link>
    </article>
  );
};

export default Article;
