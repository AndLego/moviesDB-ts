import React from "react";
import GenericContainer from "./containers/GenericContainer";
import GenresList from "./containers/GenresList";
import PeopleList from "./containers/PeopleList";
import TrendingList from "./containers/TrendingList";

const Home = () => {
  const [genreType, setGenreType] = React.useState(true);

  return (
    <>
      <TrendingList media_type={"tv"} />

      <TrendingList media_type={"movie"} />

      <PeopleList media_type={"people"} />

      <GenresList />

      {genericContainers.map((catalog, index) => {
        return <GenericContainer key={index} media_type={catalog} />;
      })}
    </>
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
