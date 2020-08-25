import React, {useState, useEffect} from 'react';
import {ProgressBar} from 'react-native-paper';
import useHttp from '../hooks/useHttp';
import MovieList from '../components/MovieList';

const TrendingScreen = () => {
  const API_URL = 'https://movieinfo.glitch.me/movie-info/trending';
  // const API_URL = 'https://abhility-fakedb.glitch.me/todos';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let movies = await useHttp(API_URL, 'GET', null);
      movies = movies.map((movie) => {
        return {
          ...movie,
          poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        };
      });
      setMovies(movies);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <ProgressBar
          indeterminate={true}
          style={{alignSelf: 'center'}}></ProgressBar>
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
};

export default TrendingScreen;
