import React, { useCallback, useRef, useState } from "react";
import Article from "./Article";

const Articles = ({ programs, searchQuery }) => {
  const articleCount = useRef(10);
  const [visibleCount, setVisibleCount] = useState(articleCount.current);

  const changeVisible = useCallback(
    (inview) => {
      if (inview) setVisibleCount((v) => v + articleCount.current);
    },
    [setVisibleCount]
  );

  return (
    <div className="articles">
      <div className="container">
        {programs.map((program, index) => (
          <Article
            program={program}
            key={program.id}
            index={index}
            searchQuery={searchQuery}
            vis={index < visibleCount ? true : false}
            changeVisible={changeVisible}
            visibleCount={visibleCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
