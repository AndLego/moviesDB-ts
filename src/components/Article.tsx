import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import styles from "../styles/article.module.css";
import PeopleList from "../containers/PeopleList";
import Genres from "./Genres";
import { colorMapMovie, colorMapTv } from "../utils/colorMaps";

const Article = () => {
  const { slug } = useParams();
  const location = useLocation();

  const mediaType = location.pathname.split("/")[1];

  const { loading, singleItem } = useApi(
    mediaType === "tv" ? `/tv/${slug}` : `/movie/${slug}`,
    Number(slug)
  );

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${singleItem.background_image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (loading) return <p>...loading</p>;

  return (
    <section className={styles.single} style={backgroundStyle}>
      <div className={styles.articleContainer}>
        <div className={styles.first}>
          <img
            src={`https://image.tmdb.org/t/p/w500${singleItem.poster_image}`}
            alt={singleItem.name}
          />
          <article>
            <h1>{singleItem.name}</h1>
            <span className={styles.tagline}>{singleItem.tagline}</span>

            <p>{singleItem.overview}</p>

            <Genres
              genresArray={singleItem.genres}
              colorMap={mediaType === "tv" ? colorMapTv : colorMapMovie}
            />

            <h2>Cast</h2>

            <PeopleList
              media_type={
                mediaType === "tv"
                  ? `/tv/${slug}/credits`
                  : `/movie/${slug}/credits`
              }
              slug={Number(slug)}
            />

            <h2>Technical Information</h2>

            <article className={styles.info}>
              <div>Vote Average</div>
              <div>{singleItem.vote_average.toFixed(2)} ⭐</div>
              <div>Runtime</div>
              <div>{`${singleItem.episode_length} m`}</div>
              <div>original title</div>
              <div>{singleItem.original_name}</div>
            </article>

            <h2>Production Companies</h2>

            <article className={styles.info}>
              {singleItem.production_companies.map((company, index) => {
                return <div key={index}>{company}</div>;
              })}
            </article>

            <article>similar</article>
            <article>recomendations</article>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Article;
