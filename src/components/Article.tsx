import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import styles from "../styles/article.module.css";

const Article = () => {
  const { slug } = useParams();
  const location = useLocation();

  const mediaType = location.pathname.split("/")[1];

  const { loading, singleItem } = useApi(`${mediaType} item`, parseInt(slug));

  if (loading) return <p>...loading</p>;

  return (
    <section>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w342${singleItem.image}`}
          alt=""
        />
        <span>{singleItem.name}</span>
        <span>{singleItem.released_date}</span>
      </figure>
      <article>
        <span>{singleItem.genres[0].name}</span>
        <p>{singleItem.overview}</p>
      </article>
      <article>
        <div>{singleItem.vote_average}</div>
        <div>{`${singleItem.episode_length} m`}</div>
      </article>
      <article>
        {singleItem.createdBy.map((person) => {
          return <p>{person}</p>;
        })}
      </article>
      <article>
        <h3>Information</h3>
        <div>
          <h4>original title</h4>
          <p>{singleItem.original_name}</p>
        </div>
        <div>
          <h4>Production Companies</h4>
          {singleItem.production_companies.map((company) => {
            return <p>{company}</p>;
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
    </section>
  );
};

export default Article;
