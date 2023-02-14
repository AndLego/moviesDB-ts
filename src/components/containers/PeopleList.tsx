import React from "react";
import styles from "../../styles/container.module.css";
import useApi from "../../hooks/useApi";
import { Person } from "../../types/types";

interface PeopleProps {
  media_type: string;
  slug?: number;
}

const PeopleList = ({ media_type, slug }: PeopleProps) => {
  const { loading, people } = useApi(media_type, slug);
  console.log("media =====>", media_type);

  if (loading) return <p>...loading...</p>;

  return (
    <section>
      <article>
        {people?.map((single: Person, index: number) => {
          return (
            <div key={index} className={styles.Person}>
              <img
                src={`https://image.tmdb.org/t/p/w342${single.profile_path}`}
                alt=""
              />
              <span>{single.name}</span>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default PeopleList;
