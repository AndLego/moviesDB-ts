import React from "react";
import { Genre } from "../types/types";
import styles from "../styles/genres.module.css"

interface GenresProp {
  genresArray: Genre[];
  colorMap: { [key: number]: string };
}

const Genres = ({ genresArray, colorMap }: GenresProp) => {
  return (
    <article id={styles.GenreContainer}>
      {genresArray.map((gen) => {
        return (
          <button className={styles.GenreBtn} key={gen.id} style={{ background: colorMap[gen.id] }}>
            {gen.name}
          </button>
        );
      })}
    </article>
  );
};

export default Genres;
