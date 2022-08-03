import axios from 'axios';

const KEY = 'b2f0a6dfe44405f771630781bf4935dd';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

export function getTrendingMovies() {
  const params = new URLSearchParams({
    api_key: KEY,
  });

  return axios.get(`${BASE_URL}/trending/movie/day?${params}`);
}

export function searchMovies(query) {
  const params = new URLSearchParams({
    api_key: KEY,
    query,
  });

  return axios.get(`${BASE_URL}/search/movie?${params}`);
}

export function getMovieDetails(id) {
  const params = new URLSearchParams({
    api_key: KEY,
    language: 'en-US',
  });

  return axios.get(`${BASE_URL}/movie/${id}?${params}`);
}

export function getMovieCredits(id) {
  const params = new URLSearchParams({
    api_key: KEY,
    language: 'en-US',
  });

  return axios.get(`${BASE_URL}/movie/${id}/credits?${params}`);
}

export function getMovieReviews(id) {
  const params = new URLSearchParams({
    api_key: KEY,
    language: 'en-US',
  });

  return axios.get(`${BASE_URL}/movie/${id}/reviews?${params}`);
}
