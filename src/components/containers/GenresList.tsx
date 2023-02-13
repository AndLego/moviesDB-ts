import React from "react";
import useApi from "../../hooks/useApi";
import styles from "../../styles/container.module.css";
import "../../styles/main.css";
import { colorMapMovie, colorMapTv } from "../../utils/colorMaps";

const GenresList = () => {
  const [active, setActive] = React.useState(false);
  const { loading, genresMovie } = useApi("genreMovie");
  const { genresTv } = useApi("genreTv");

  const handleType = () => {
    setActive(!active);
  };

  if (loading) return <p>...loading</p>;

  return (
    <section className={styles.Genres}>
      <p className={styles.titles}>Genres</p>
      <div>
        <button className={active ? "" : styles.Active} onClick={handleType}>
          Movie
        </button>
        <button className={active ? styles.Active : ""} onClick={handleType}>
          Tv
        </button>
      </div>
      <article>
        {!active
          ? genresMovie.map((gen) => {
              return (
                <h3 key={gen.id} style={{ background: colorMapMovie[gen.id] }}>
                  {gen.name}
                </h3>
              );
            })
          : genresTv.map((gen) => {
              return (
                <h3 key={gen.id} style={{ background: colorMapTv[gen.id] }}>
                  {gen.name}
                </h3>
              );
            })}
      </article>
    </section>
  );
};

export default GenresList;
