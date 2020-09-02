import React, {useContext} from 'react';
import {Button, Card, IconButton} from 'react-native-paper';
import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Rating from './Rating';
import {colors} from '../helpers/constants';
import {AuthContext} from '../helpers/AuthContext';

const Movie = ({movie, navigation}) => {
  const {addToWatchList, removeFromWatchList} = useContext(AuthContext);
  const detailsPressHandler = () => {
    navigation.navigate('Details', {
      movieId: movie.item.id,
      name: movie.item.title,
    });
  };
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: movie.item.poster_path,
        }}
        style={{backgroundColor: '#E2E3E4', resizeMode: 'stretch'}}
      />
      <Card.Title
        title={movie.item.title}
        subtitle={`Release date - ${movie.item.release_date}`}
      />
      <Card.Content style={styles.content}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Rating votes={movie.item.vote_average} />
        </View>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button
          mode="contained"
          icon="tag-multiple"
          style={{borderRadius: 20, paddingHorizontal: 10}}
          onPress={detailsPressHandler}>
          Details
        </Button>
        {movie.item.inWatchlist ? (
          <Button
            onPress={() => removeFromWatchList(movie.item.id)}
            mode="contained"
            style={{borderRadius: 20, paddingHorizontal: 10}}
            icon="check-bold">
            In Watchlist
          </Button>
        ) : (
          <Button
            onPress={() => addToWatchList(movie.item.id)}
            mode="contained"
            style={{borderRadius: 20, paddingHorizontal: 10}}
            icon="bookmark-plus">
            Add to Watchlist
          </Button>
        )}
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 5,
    alignSelf: 'center',
    marginBottom: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
});

export default Movie;
