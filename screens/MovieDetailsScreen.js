import React from 'react';
import {ScrollView} from 'react-native';
import MovieCast from '../components/MovieCast';
import MovieInfo from '../components/MovieInfo';
import Posters from '../components/Posters';

const MovieDetailsScreen = ({route, navigation}) => {
  const {movieId, name} = route.params;
  return (
    <>
      <ScrollView>
        <MovieInfo movieId={movieId} navigation={navigation} name={name} />
        <MovieCast movieId={movieId} />
        <Posters movieId={movieId} />
      </ScrollView>
    </>
  );
};

export default MovieDetailsScreen;
