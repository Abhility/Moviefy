import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput, IconButton, ProgressBar, Title} from 'react-native-paper';
import Header from '../components/Header';
import * as Animatable from 'react-native-animatable';
import {httpRequest} from '../helpers/httpClient';
import MovieList from '../components/MovieList';
import Icon from 'react-native-vector-icons/AntDesign';

let results = {};

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = 'https://moviefy.glitch.me/movie-info/search/';

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
        };
      });
      results[query] = movies;
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
            color="#1E35A9"
            onPress={queryData}
          />
        </Animatable.View>
        <View>
          {loading ? (
            <ProgressBar indeterminate={true}></ProgressBar>
          ) : movies.length ? (
            <MovieList movies={movies} navigation={navigation} />
          ) : (
            <Animatable.View
              animation="bounceInDown"
              style={{alignItems: 'center', marginVertical: 40}}>
              <Icon name="frowno" color="#1E35A9" size={80} />
              <Title style={{color: '#1E35A9'}}>No Results found...</Title>
            </Animatable.View>
          )}
        </View>
      </View>
    </>
  );
};

export default SearchScreen;
