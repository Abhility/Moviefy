import React from 'react';
import Movie from '../components/Movie';
import {FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';

const MovieList = ({movies, navigation}) => {
  return (
    <Animatable.View animation="fadeInDownBig">
      <FlatList
        style={{
          width: '100%',
          marginTop: 5,
          alignSelf: 'center',
          marginBottom: 50,
        }}
        data={movies}
        renderItem={(movie) => <Movie movie={movie} navigation={navigation} />}
        keyExtractor={(movie) => movie.id.toString()}
      />
    </Animatable.View>
  );
};

export default MovieList;
