import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Rating = ({votes}) => {
  const rating = Math.round(votes * 0.5);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon color="#CFAE29" name="star" size={25} key={i} />);
  }
  return <Text>{[...stars]}</Text>;
};

export default Rating;
