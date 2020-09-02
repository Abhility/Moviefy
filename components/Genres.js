import React from 'react';
import {Chip} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {colors} from '../helpers/constants';

const Genres = ({genres}) => {
  return (
    <Animatable.View animation="slideInLeft" style={{flexDirection: 'row'}}>
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          icon="movie-roll"
          selectedColor="white"
          style={{
            fontSize: 25,
            marginHorizontal: 3,

            backgroundColor: colors.primary,
          }}>
          {genre.name}
        </Chip>
      ))}
    </Animatable.View>
  );
};

export default Genres;
