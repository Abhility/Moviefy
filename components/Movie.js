import React from 'react';
import {Button, Card, IconButton} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const pressHandler = () => {
  ToastAndroid.showWithGravity(
    'Coming Soon!',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};
const Movie = ({movie}) => {
  const rating = Math.round(movie.item.vote_average * 0.5);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon color="#CFAE29" name="star" size={25} key={i} />);
  }
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.cover}
        source={{
          uri: movie.item.poster_path,
        }}
        resizeMode="center"
      />
      <Card.Title
        title={movie.item.title}
        subtitle={`Release date - ${movie.item.release_date}`}
      />
      <Card.Content style={{flexDirection: 'row'}}>{[...stars]}</Card.Content>
      <Card.Actions>
        <TouchableOpacity>
          <Button onPress={pressHandler}>View</Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconButton
            onPress={pressHandler}
            icon="bookmark-plus"
            color="#1E35A9"
          />
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    elevation: 8,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 30,
  },
  cover: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default Movie;
