import React from 'react';
import {Button, Card, Title, Paragraph, IconButton} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Movie = ({movie}) => {
  const rating = Math.round(movie.item.vote_average * 0.5);
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon color="#F5DE0F" name="star" size={25} key={i} />);
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
      <Card.Content>
        <Text>{[...stars]}</Text>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity>
          <Button>View</Button>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconButton icon="bookmark-plus" color="#1E35A9" />
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
  },
});

export default Movie;
