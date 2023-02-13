import React from "react";
import styles from "../../styles/container.module.css";
import useApi from "../../hooks/useApi";
import { Person } from "../../types/types";

interface PeopleProps {
  mediaType: string;
  slug?: number;
}

const PeopleList = ({ mediaType, slug }: PeopleProps) => {
  const [type, setType] = React.useState("");

  const peopleCall = () => {
    if (mediaType === "trend") {
      setType("people");
    }
    if (mediaType === "tv") {
      setType("tv-cast");
    }
    if (mediaType === "movie") {
      setType("movie-cast");
    }
  };

  React.useEffect(() => {
    peopleCall();
  }, []);

  const { loading, people } = useApi(type, Number(slug));

  console.log("peoplelist", people);

  if (loading) return <p>...loading</p>;

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
