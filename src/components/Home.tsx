import React from "react";
import GenericContainer from "./containers/GenericContainer";
import GenresList from "./containers/GenresList";
import PeopleList from "./containers/PeopleList";
import TrendingList from "./containers/TrendingList";
import styles from "../styles/container.module.css";

const Home = () => {
  return (
    <main>
      <h1 className={styles.titles}>Trending Tv</h1>
      <TrendingList media_type={"tv"} />

      <h1 className={styles.titles}>Trending Movie</h1>
      <TrendingList media_type={"movie"} />

      <h1 className={styles.titles}>Trending People</h1>
      <PeopleList mediaType={"trend"} />

      <GenresList />

      {genericContainers.map((catalog, index) => {
        return <GenericContainer key={index} media_type={catalog} />;
      })}
    </main>
  );
};

export default Home;

const genericContainers = [
  "movie - popular",
  "popular - serie",
  "upcoming movies",
  "top shows",
  "top movies",
];
