const key = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
  requestSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28=en-US&page=3`,
  requestAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=12=en-US&page=2`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=18`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
};

const movieVideos = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`;
};

718821;
export default requests;
