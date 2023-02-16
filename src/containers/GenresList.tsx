import React from "react";
import Genres from "../components/Genres";
import useApi from "../hooks/useApi";
import styles from "../styles/genres.module.css";
import "../styles/main.css";
import { colorMapMovie, colorMapTv } from "../utils/colorMaps";

const GenresList = () => {
  const [active, setActive] = React.useState(false);
  const { loading, genresMovie } = useApi("/genre/movie/list");
  const { genresTv } = useApi("/genre/tv/list");

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

      {!active ? (
        <Genres genresArray={genresMovie} colorMap={colorMapMovie} />
      ) : (
        <Genres genresArray={genresTv} colorMap={colorMapTv} />
      )}
    </section>
  );
};

export default GenresList;
