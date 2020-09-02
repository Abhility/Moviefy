import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput, IconButton, ProgressBar, Title} from 'react-native-paper';
import Header from '../components/Header';
import * as Animatable from 'react-native-animatable';
import {httpRequest} from '../helpers/httpClient';
import MovieList from '../components/MovieList';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../helpers/constants';
import {AuthContext} from '../helpers/AuthContext';

let results = {};

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = 'https://moviefy.glitch.me/movie-info/search/';

  const {watchList} = useContext(AuthContext);

  const queryData = async () => {
    if (!query) return;

    setLoading(true);

    if (results[query]) {
      setMovies(results[query]);
      setLoading(false);
      return;
    }

    try {
      let movies = await httpRequest(API_URL + query, 'GET', null);
      movies = movies.map((movie) => {
        return {
          ...movie,
          poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          inWatchlist: watchList.includes(movie.id),
        };
      });
      results[query] = movies;
      if (movies.length === 0) setIsEmpty(true);
      setMovies(movies);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleChange = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    const newMovies = movies.map((movie) => {
      return {
        ...movie,
        inWatchlist: watchList.includes(movie.id),
      };
    });
    console.log('searchScreen...watchList', watchList);
    setMovies(newMovies);
  }, [watchList]);

  return (
    <>
      <Header title="Moviefy" navigation={navigation} />
      <View style={{flex: 1}}>
        <Animatable.View
          animation="fadeInUp"
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{flex: 1}}
            label="Query"
            mode="outlined"
            value={query}
            onChangeText={(value) => handleChange(value)}
          />
          <IconButton
            icon="database-search"
            color={colors.primary}
            onPress={queryData}
          />
        </Animatable.View>
        <View style={{marginBottom: 40}}>
          {loading ? (
            <ProgressBar indeterminate={true}></ProgressBar>
          ) : isEmpty ? (
            <Animatable.View
              animation="bounceInDown"
              style={{alignItems: 'center', marginVertical: 40}}>
              <Icon name="frowno" color={colors.primary} size={80} />
              <Title style={{color: colors.primary}}>No Results found...</Title>
            </Animatable.View>
          ) : (
            <MovieList movies={movies} navigation={navigation} />
          )}
        </View>
      </View>
    </>
  );
};

export default SearchScreen;
