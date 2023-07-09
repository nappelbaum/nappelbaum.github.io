import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Article = ({
  program,
  index,
  searchQuery,
  vis,
  changeVisible,
  visibleCount,
}) => {
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

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    changeVisible(inView);
  }, [inView, changeVisible]);

  return (
    <>
      <article className={`article${vis === true ? "" : " article--invis"}`}>
        <div className="article__text">
          <Link
            className="article__title"
            to={`/prog?id=${program.id}`}
            onClick={() => window.scrollTo({ top: 0 })}
            dangerouslySetInnerHTML={articleTitle}
          ></Link>
          <Link
            className="article__caption"
            to={`/prog?id=${program.id}`}
            onClick={() => window.scrollTo({ top: 0 })}
            dangerouslySetInnerHTML={articleText}
          ></Link>
        </div>
        <Link
          to={`/prog?id=${program.id}`}
          className="button articles__btn articles__btn--hide"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Открыть
        </Link>
      </article>
      {index + 1 === visibleCount && (
        <div ref={ref} className="article__split"></div>
      )}
    </>
  );
};

export default Article;
