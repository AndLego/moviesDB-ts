export interface Genre {
    id: number,
    name: string
}

export interface Tv {
    adult: boolean,
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false
    vote_average: number,
    vote_count: number,
}

export interface Person {
    id: number,
    known_for: any[],
    name: string,
    profile_path: string,
}

export interface Single {
    createdBy: string[],
    episode_length: number,
    genres: Genre[],
    homepage: string,
    id: number,
    background_image: string,
    poster_image: string,
    name: string,
    networks: any[],
    original_name: string,
    overview: string,
    production_companies: string[],
    released_date: string,
    tagline: string,
    vote_average: number

}