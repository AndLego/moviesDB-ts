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

  //   switch (what) {
  //     case "tv":

  //     case "movie":

  //     case "movie - popular":

  //     case "popular - serie":

  //     case "upcoming movies":

  //     case "top shows":

  //     case "top movies":
  //       setCatalog(db.results);
  //       setLoading(false);
  //       break;

  //     case "people":
  //       setPeople(
  //         db.results.map((item: Person) => ({
  //           id: item.id,
  //           known_for: item.known_for,
  //           name: item.name,
  //           profile_path: item.profile_path,
  //         }))
  //       );

  //       setLoading(false);
  //       break;

  //     case "genreMovie":
  //       setGenresMovie(db.genres);
  //       setLoading(false);
  //       break;

  //     case "genreTv":
  //       setGenresTv(db.genres);
  //       setLoading(false);
  //       break;

  //     // single querry fot movies,show or person

  //     case "tv item":

  //     case "movie item":
  //       setSingleItem({
  //         background_image: db.backdrop_path,
  //         poster_image: db.poster_path,
  //         createdBy: db.created_by.map((creator: any) => creator.name),
  //         released_date: db.first_air_date,
  //         episode_length: db.episode_run_time[0],
  //         genres: db.genres,
  //         homepage: db.homepage,
  //         id: db.id,
  //         name: db.name,
  //         networks: db.networks,
  //         original_name: db.original_name,
  //         overview: db.overview,
  //         production_companies: db.production_companies.map(
  //           (company: any) => company.name
  //         ),
  //         tagline: db.tagline,
  //         vote_average: db.vote_average,
  //       });
  //       setLoading(false);

  //     case "tv-cast":

  //     case "movie-cast":
  //       setPeople(
  //         db.cast.map((item: Person) => ({
  //           id: item.id,
  //           known_for: item.known_for,
  //           name: item.name,
  //           profile_path: item.profile_path,
  //         }))
  //       );
  //       break;

  //     default:
  //       break;
  //   }
  // };

  let query: string = what;

  const fetchData = async () => {
    let url = `https://api.themoviedb.org/3${query}?api_key=${KEY}`;
    const response = await fetch(url);
    const db = await response.json();

    console.log("query =========>", query);
    console.log("comparacion ===>", `/movie/${idSlug}/credits`);

    if (query === "/trending/person/day") {
      setPeople(
        db.results.map((item: Person) => ({
          id: item.id,
          known_for: item.known_for,
          name: item.name,
          profile_path: item.profile_path,
        }))
      );
      setLoading(false);
      return;
    }

    if (query === "/genre/movie/list") {
      setGenresMovie(db.genres);
      setLoading(false);
      return;
    }

    if (query === "/genre/tv/list") {
      setGenresTv(db.genres);
      setLoading(false);
      return;
    }

    if (query === `/tv/${idSlug}` || query === `/movie/${idSlug}`) {
      setSingleItem({
        background_image: db.backdrop_path,
        poster_image: db.poster_path,
        released_date: db.first_air_date || db.release_date,
        episode_length: db.episode_run_time?.[0] || [],
        genres: db.genres,
        homepage: db.homepage,
        id: db.id,
        name: db.name || db.title,
        networks: db.networks || [],
        original_name: db.original_name || db.original_title,
        overview: db.overview,
        production_companies: db.production_companies.map(
          (company: any) => company.name
        ),
        tagline: db.tagline,
        vote_average: db.vote_average,
      });
      setLoading(false);

      return;
    }

    if (
      query === `/tv/${idSlug}/credits` ||
      query === `/movie/${idSlug}/credits`
    ) {
      console.log("entre");

      console.log(url);
      console.log(db);

      setPeople(
        db.cast.slice(0, 20).map((item: Person) => ({
          id: item.id,
          known_for: item.known_for,
          name: item.name,
          profile_path: item.profile_path,
        }))
      );
      setLoading(false);

      return;
    }

    if (query) {
      setCatalog(db.results);
      setLoading(false);
      return;
    }
  };

  React.useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [query]);

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
