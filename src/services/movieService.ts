import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
  });

  return response.data;
};
