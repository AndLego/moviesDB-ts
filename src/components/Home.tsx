import React from "react";
import GenericContainer from "../containers/GenericContainer";
import GenresList from "../containers/GenresList";
import PeopleList from "../containers/PeopleList";
import TrendingList from "../containers/TrendingList";
import styles from "../styles/container.module.css";

const Home = () => {
  return (
    <main>
      <h1 className={styles.titles_trending}>Trending Tv</h1>
      <TrendingList media_type={"/trending/tv/day"} />

      <h1 className={styles.titles_trending}>Trending Movie</h1>
      <TrendingList media_type={"/trending/movie/day"} />

      <h1 className={styles.titles_trending}>Trending People</h1>
      <PeopleList media_type={"/trending/person/day"} />

      <GenresList />

      {genericContainers.map((catalog, index) => {
        return (
          <GenericContainer
            key={index}
            media_type={catalog.url}
            title={catalog.title}
          />
        );
      })}
    </main>
  );
};

export default Home;

const genericContainers = [
  { url: "/movie/popular", title: "movie - popular" },
  { url: "/tv/popular", title: "serie - popular" },
  { url: "/movie/upcoming", title: "upcoming movies" },
  { url: "/tv/top_rated", title: "top shows" },
  { url: "/movie/top_rated", title: "top movies" },
];
