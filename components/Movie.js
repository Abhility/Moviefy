import React from 'react';
import {Button, Card, IconButton} from 'react-native-paper';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Rating from './Rating';

const Movie = ({movie, navigation}) => {
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
        resizeMode="cover"
        resizeMethod="scale"
        style={{backgroundColor: '#E2E3E4'}}
      />
      <Card.Title
        title={movie.item.title}
        subtitle={`Release date - ${movie.item.release_date}`}
      />
      <Card.Content style={styles.content}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Rating votes={movie.item.vote_average} />
        </View>
        <TouchableOpacity>
          <IconButton
            onPress={() =>
              ToastAndroid.showWithGravity(
                'Coming Soon!',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
              )
            }
            icon="bookmark-plus"
            color="#1E35A9"
            size={45}
          />
        </TouchableOpacity>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <View style={{flex: 1}}>
          <TouchableOpacity>
            <Button
              mode="contained"
              icon="tag-multiple"
              style={{borderRadius: 20}}
              onPress={detailsPressHandler}>
              Details
            </Button>
          </TouchableOpacity>
        </View>
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
  },
});

export default Movie;
