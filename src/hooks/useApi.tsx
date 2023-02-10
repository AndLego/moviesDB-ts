import React from "react";
import { Genre, Movie, Person, Tv } from "../types/types";

// type DataProperties = {
//   [key: string]: any;
// };

// export type Data =
//   | (Tv & DataProperties)[]
//   | (Movie & DataProperties)[]
//   | (Person & DataProperties)[];

interface ApiReturn {
  loading: boolean;
  catalog: Tv[] | Movie[];
  people: Person[];
  genresMovie: Genre[];
  genresTv: Genre[];
}

const KEY = import.meta.env.VITE_API_KEY;

// const url = `https://api.themoviedb.org/3/${what}?api_key=${KEY}`;
// const url = `https://api.themoviedb.org/3/movie/76341?api_key=${KEY}`;

const useApi = (what: string): ApiReturn => {
  const [loading, setLoading] = React.useState(true);
  const [catalog, setCatalog] = React.useState<Tv[] | Movie[]>([]);
  const [people, setPeople] = React.useState<Person[]>([]);
  const [genresMovie, setGenresMovie] = React.useState<Genre[]>([]);
  const [genresTv, setGenresTv] = React.useState<Genre[]>([]);

  let query: string = "";

  switch (what) {
    case "tv":
      query = "/trending/tv/day";
      break;

    case "movie":
      query = "/trending/movie/day";
      break;

    case "people":
      query = "/person/popular";
      break;

    case "genreMovie":
      query = "/genre/movie/list";
      break;

    case "genreTv":
      query = "/genre/tv/list";
      break;

    case "movie - popular":
      query = "/movie/popular";
      break;

    case "popular - serie":
      query = "/tv/popular";
      break;

    case "upcoming movies":
      query = "/movie/upcoming";
      break;

    case "top shows":
      query = "/tv/top_rated";
      break;

    case "top movies":
      query = "/movie/top_rated";
      break;

    default:
      break;
  }

  const fetchData = async () => {
    let url = `https://api.themoviedb.org/3${query}?api_key=${KEY}`;

    const response = await fetch(url);
    const db = await response.json();

    switch (what) {
      case "tv":
        setCatalog(db.results);
        setLoading(false);
        break;

      case "movie":
        setCatalog(db.results);
        setLoading(false);
        break;

      case "people":
        setPeople(db.results);
        setLoading(false);
        break;

      case "genreMovie":
        setGenresMovie(db.genres);
        setLoading(false);
        break;

      case "genreTv":
        setGenresTv(db.genres);
        setLoading(false);
        break;

      case "movie - popular":
        setCatalog(db.results);
        setLoading(false);
        break;

      case "popular - serie":
        setCatalog(db.results);
        setLoading(false);
        break;

      case "upcoming movies":
        setCatalog(db.results);
        setLoading(false);
        break;

      case "top shows":
        setCatalog(db.results);
        setLoading(false);
        break;

      case "top movies":
        setCatalog(db.results);
        setLoading(false);
        break;

      default:
        break;
    }
  };

  React.useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { loading, catalog, people, genresMovie, genresTv };
};

export default useApi;
