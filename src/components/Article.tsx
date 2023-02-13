import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import styles from "../styles/article.module.css";
import PeopleList from "./containers/PeopleList";

const Article = () => {
  const { slug } = useParams();
  const location = useLocation();

  const mediaType = location.pathname.split("/")[1];

  const { loading, singleItem } = useApi(`${mediaType} item`, Number(slug));
 

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
            <span>{singleItem.tagline}</span>
            <span>{singleItem.released_date}</span>
            <div>
              {singleItem.genres.map((gen) => {
                return <span>{gen.name}</span>;
              })}
            </div>
            <p>{singleItem.overview}</p>

            <p>Cast</p>

            <PeopleList mediaType={mediaType} slug={slug} />

            <article className={styles.info}>
              <span> Created By</span>
              <div>
                {singleItem.createdBy.map((person, index) => {
                  return <p key={index}>{person}</p>;
                })}
              </div>
            </article>
            <article>
              <div>{singleItem.vote_average}</div>
              <div>{`${singleItem.episode_length} m`}</div>
            </article>
            <article>
              <h3>Information</h3>
              <div>
                <h4>original title</h4>
                <p>{singleItem.original_name}</p>
              </div>
              <div>
                <h4>Production Companies</h4>
                {singleItem.production_companies.map((company, index) => {
                  return <p key={index}>{company}</p>;
                })}
              </div>
            </article>
            <article>
              <div>genero1</div>
              <div>genero2</div>
              <div>genero3</div>
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
