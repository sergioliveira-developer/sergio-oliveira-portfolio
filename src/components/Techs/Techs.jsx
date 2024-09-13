import React from "react";
import S from "./styles.module.scss";

export const Techs = ({ title, techs }) => {
  return (
    <div className={S.divTech}>
      <h1> {title} </h1>
      <div className={S.divTechs}>
        {techs.map((tech, index) => (
          <div key={index} className={S.techs}>
            {tech.icon}
            <p className={S.techName}> {tech.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
