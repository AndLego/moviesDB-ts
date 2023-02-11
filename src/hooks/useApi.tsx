import React from "react";
import { Genre, Movie, Person, Single, Tv } from "../types/types";

interface ApiReturn {
  loading: boolean;
  catalog: Tv[] | Movie[];
  people: Person[];
  genresMovie: Genre[];
  genresTv: Genre[];
  singleItem: Single;
}

const KEY = import.meta.env.VITE_API_KEY;

const useApi = (what: string, idSlug?: number): ApiReturn => {
  const [loading, setLoading] = React.useState(true);
  const [catalog, setCatalog] = React.useState<Tv[] | Movie[]>([]);
  const [people, setPeople] = React.useState<Person[]>([]);
  const [genresMovie, setGenresMovie] = React.useState<Genre[]>([]);
  const [genresTv, setGenresTv] = React.useState<Genre[]>([]);
  const [singleItem, setSingleItem] = React.useState<Single>({} as Single);

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

    // single querry fot movies,show or person

    case "tv item":
      query = `/tv/${idSlug}`;
      break;

    case "movie item":
      query = `/movie/${idSlug}`;
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

      case "movie":

      case "movie - popular":

      case "popular - serie":

      case "upcoming movies":

      case "top shows":

      case "top movies":
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

      // single querry fot movies,show or person

      case "tv item":

      case "movie item":
        setSingleItem({
          image: db.backdrop_path,
          createdBy: db.created_by.map((creator: any) => creator.name),
          released_date: db.first_air_date,
          episode_length: db.episode_run_time[0],
          genres: db.genres,
          homepage: db.homepage,
          id: db.id,
          name: db.name,
          networks: db.networks,
          original_name: db.original_name,
          overview: db.overview,
          production_companies: db.production_companies.map(
            (company: any) => company.name
          ),
          tagline: db.tagline,
          vote_average: db.vote_average,
        });
        setLoading(false);

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

  return {
    loading,
    catalog,
    people,
    genresMovie,
    genresTv,
    singleItem,
  };
};

export default useApi;
