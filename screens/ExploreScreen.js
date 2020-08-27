import React, {useState, useEffect, useReducer} from 'react';
import Header from '../components/Header';
import {ScrollView, Text, View} from 'react-native';
import {Chip, ProgressBar} from 'react-native-paper';
import {httpRequest} from '../helpers/httpClient';
import MovieList from '../components/MovieList';
import * as Animatable from 'react-native-animatable';

let genres = [
  {id: 28, name: 'Action', selected: true},
  {id: 12, name: 'Adventure', selected: false},
  {id: 16, name: 'Animation', selected: false},
  {id: 35, name: 'Comedy', selected: false},
  {id: 80, name: 'Crime', selected: false},
  {id: 99, name: 'Documentary', selected: false},
  {id: 18, name: 'Drama', selected: false},
  {id: 10751, name: 'Family', selected: false},
  {id: 14, name: 'Fantasy', selected: false},
  {id: 36, name: 'History', selected: false},
  {id: 27, name: 'Horror', selected: false},
  {id: 10402, name: 'Music', selected: false},
  {id: 9648, name: 'Mystery', selected: false},
  {id: 10749, name: 'Romance', selected: false},
  {id: 878, name: 'Science Fiction', selected: false},
  {id: 10770, name: 'TV Movie', selected: false},
  {id: 53, name: 'Thriller', selected: false},
  {id: 10752, name: 'War', selected: false},
  {id: 37, name: 'Western', selected: false},
];

const initialState = {
  genre: 'Action',
  movies: [],
  loading: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GENRE_CHANGED':
      return {
        ...state,
        genre: action.genre,
      };
    case 'DATA_FETCHED':
      return {
        ...state,
        loading: false,
        movies: [...action.movies],
      };
    case 'FETCHING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
const HomeScreen = ({navigation}) => {
  const [selectedGenre, setSelectedGenre] = useState('Action');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const API_URL = `https://moviefy.glitch.me/movie-info/genre/${state.genre}`;
  const fetchData = async () => {
    dispatch({type: 'FETCHING'});
    try {
      let movies = await httpRequest(API_URL, 'GET', null);
      movies = movies
        .filter((movie) => movie.poster_path !== null)
        .map((movie) => {
          return {
            ...movie,
            poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          };
        });
      dispatch({type: 'DATA_FETCHED', movies});
    } catch (err) {
      console.log(err);
      dispatch({type: 'FETCH_FAILED'});
    }
  };
  useEffect(() => {
    fetchData();
  }, [state.genre]);

  const handleSelection = (selectedGenre) => {
    genres = genres.map((genre) => {
      genre.id === selectedGenre.id
        ? (genre.selected = true)
        : (genre.selected = false);
      return genre;
    });
    if (selectedGenre.name !== state.genre)
      dispatch({type: 'GENRE_CHANGED', genre: selectedGenre.name});
  };
  return (
    <>
      <Header title="Moviefy" navigation={navigation} />
      <View style={{flex: 1}}>
        <Animatable.View animation="fadeInRight" delay={1000}>
          <ScrollView
            horizontal={true}
            style={{
              paddingHorizontal: 5,
              paddingVertical: 10,
            }}>
            {genres.map((genre) => (
              <Chip
                selected={genre.selected}
                icon={genre.selected ? 'check-all' : 'movie-outline'}
                mode="outlined"
                selectedColor={genre.selected ? 'white' : 'black'}
                key={genre.id}
                style={{
                  fontSize: 25,
                  flex: 1,
                  marginHorizontal: 3,
                  backgroundColor: genre.selected ? '#1E35A9' : 'white',
                }}
                onPress={handleSelection.bind(null, genre)}>
                {genre.name}
              </Chip>
            ))}
          </ScrollView>
        </Animatable.View>
        <View>
          {state.loading ? (
            <ProgressBar indeterminate={true}></ProgressBar>
          ) : state.error ? (
            <Text>Some error occured!</Text>
          ) : (
            <MovieList movies={state.movies} navigation={navigation} />
          )}
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
