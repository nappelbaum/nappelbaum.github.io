import React from "react";
import Article from "./Article";

const Articles = ({ programs, searchQuery }) => {
  return (
    <div className="articles">
      <div className="container">
        {programs.map((program, index) => (
          <Article
            program={program}
            key={program.id}
            index={index}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
