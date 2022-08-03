import { getTrendingMovies } from 'services/moviesApi';
import { searchMovies } from 'services/moviesApi';
import { getMovieDetails } from 'services/moviesApi';
import { getMovieCredits } from 'services/moviesApi';
import { getMovieReviews } from 'services/moviesApi';

export const App = () => {
  // console.log(searchMovies('cat'));
  // console.log(getMovieDetails('89125'));
  // console.log(getMovieCredits('89125'));
  // console.log(getMovieReviews('89125'));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
