import React from "react";
import useApi from "../hooks/useApi.js";
import { Movie, Tv } from "../types/types.js";
import styles from "../styles/container.module.css";
import { useNavigate } from "react-router-dom";

const TrendingList = ({ media_type }: { media_type: string }) => {
  const { loading, catalog } = useApi(media_type);
  const navigate = useNavigate();

  const handleArticle = (media_type: string, id: number) => {
    if (media_type === "tv") {
      navigate(`/tv/${id}`);
    }
    if (media_type === "movie") {
      navigate(`/movie/${id}`);
    }
  };

  if (loading) return <p>...loading</p>;

  return (
    <section>
      <article>
        {catalog?.map((single: Tv | Movie, index: number) => {
          return (
            <div
              key={index}
              className={styles.Single}
              onClick={() => handleArticle(single.media_type, single.id)}
            >
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
