import React from "react";
import useApi from "../../hooks/useApi";
import styles from "../../styles/container.module.css";

const GenericContainer = ({ media_type }: { media_type: string }) => {
  const { loading, catalog } = useApi(media_type);
  if (loading) return <p>...loading</p>;

  return (
    <section>
      <p>{media_type}</p>
      <article className={styles.Generic}>
        {catalog.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt=""
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default GenericContainer;
