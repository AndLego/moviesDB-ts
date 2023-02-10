import React from "react";
import useApi from "../../hooks/useApi.jsx";
import { Movie, Tv } from "../../types/types.js";
import styles from "../../styles/container.module.css";

// const urlTv = ;
// const urlMovie = ;

const TrendingList = ({ media_type }: { media_type: string }) => {
  const { loading, catalog } = useApi(media_type);

  if (loading) return <p>...loading</p>;

  return (
    <section>
      <p>Trending {media_type}</p>
      <article>
        {catalog?.map((single: Tv | Movie, index: number) => {
          return (
            <div key={index} className={styles.Single}>
              <span>{index + 1}</span>
              <img
                src={`https://image.tmdb.org/t/p/w342${single.poster_path}`}
                alt=""
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default TrendingList;
