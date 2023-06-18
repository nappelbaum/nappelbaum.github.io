import React from "react";
import Skill from "./Skill";
import "./../sass/main.scss";

const Skills = ({ skills }) => {
  return (
    <main className="skills">
      <div className="container">
        {skills.map((skill, index) => (
          <Skill
            category={skill.category}
            text={skill.text}
            href={skill.href}
            src={skill.src}
            key={skill.id}
            skillRight={index % 2 !== 0 ? " skill__text--right" : ""}
          />
        ))}
      </div>
    </main>
  );
};

export default Skills;
