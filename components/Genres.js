import React from 'react';
import {Chip} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const Genres = ({genres}) => {
  return (
    <Animatable.View
      animation="slideInLeft"
      delay={2000}
      style={{flexDirection: 'row'}}>
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          icon="movie-roll"
          selectedColor="white"
          style={{
            fontSize: 25,
            marginHorizontal: 3,

            backgroundColor: '#1E35A9',
          }}>
          {genre.name}
        </Chip>
      ))}
    </Animatable.View>
  );
};

export default Genres;
