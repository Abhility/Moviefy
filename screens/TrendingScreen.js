import React, {useState, useEffect, useContext} from 'react';
import {ProgressBar} from 'react-native-paper';
import {httpRequest} from '../helpers/httpClient';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import {AuthContext} from '../helpers/AuthContext';

const TrendingScreen = ({navigation}) => {
  const API_URL = 'https://moviefy.glitch.me/movie-info/trending';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const {watchList} = useContext(AuthContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      let movies = await httpRequest(API_URL, 'GET', null);
      movies = movies.map((movie) => {
        return {
          ...movie,
          poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          inWatchlist: watchList.includes(movie.id),
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

  useEffect(() => {
    const newMovies = movies.map((movie) => {
      return {
        ...movie,
        inWatchlist: watchList.includes(movie.id),
      };
    });
    console.log('trendingScreen...watchList', watchList);
    setMovies(newMovies);
  }, [watchList]);

  return (
    <>
      <Header title="Moviefy" navigation={navigation} />
      {loading ? (
        <ProgressBar indeterminate={true}></ProgressBar>
      ) : (
        <MovieList movies={movies} navigation={navigation} />
      )}
    </>
  );
};

export default TrendingScreen;
