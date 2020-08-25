import React from 'react';
import Movie from '../components/Movie';
import {FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';

const MovieList = ({movies}) => {
  return (
    <Animatable.View animation="fadeInDownBig">
      <FlatList
        style={{width: '90%', marginTop: 10, alignSelf: 'center'}}
        data={movies}
        renderItem={(movie) => <Movie movie={movie} />}
        keyExtractor={(movie) => movie.id.toString()}
      />
    </Animatable.View>
  );
};

export default MovieList;
