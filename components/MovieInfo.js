import React, {useState, useEffect} from 'react';
import {httpRequest} from '../helpers/httpClient';
import * as Animatable from 'react-native-animatable';
import {Image, ScrollView, StyleSheet, View, ToastAndroid} from 'react-native';
import {Title, Caption, Paragraph, Button} from 'react-native-paper';
import Rating from './Rating';
import Genres from './Genres';

const MovieInfo = ({movieId, navigation, name}) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const API_URL = `https://moviefy.glitch.me/movie-info/getmovie/${movieId}`;

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = await httpRequest(API_URL, 'GET', null);
      data = {...data, poster_path: imagePath + data.poster_path};
      setLoading(false);
      setMovie(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Image
          style={{
            flex: 1,
            alignSelf: 'center',
            width: 100,
            height: 100,
          }}
          source={require('../assests/spinner.gif')}
        />
      ) : (
        <Animatable.View animation="bounceInDown" delay={2000}>
          <Image style={styles.poster} source={{uri: movie.poster_path}} />
          <Title style={styles.text}>{movie.title}</Title>
          <Caption style={styles.text}>{movie.release_date}</Caption>
          <View style={styles.info}>
            <Rating votes={movie.vote_average} />
          </View>
          <View style={styles.info}>
            {movie.genres && <Genres genres={movie.genres.slice(0, 3)} />}
          </View>
          <View style={styles.actions}>
            <Button
              style={{marginHorizontal: 20, borderRadius: 20}}
              icon="video-vintage"
              mode="outlined"
              onPress={() => {
                navigation.navigate('Videos', {name, movieId});
              }}>
              Videos
            </Button>
            <Button
              style={{marginHorizontal: 20, borderRadius: 20}}
              icon="bookmark-plus"
              mode="outlined"
              onPress={() =>
                ToastAndroid.showWithGravity(
                  'Coming Soon!',
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                )
              }>
              Add to Watchlist
            </Button>
          </View>
          <Paragraph style={styles.text}>{movie.overview}</Paragraph>
        </Animatable.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  poster: {
    height: 350,
    width: 400,
    resizeMode: 'stretch',
    alignSelf: 'center',
    backgroundColor: '#E2E3E4',
  },
  text: {
    paddingHorizontal: 10,
    textAlign: 'center',
    marginVertical: 5,
  },
  info: {
    alignItems: 'center',
    marginVertical: 5,
  },
  description: {
    textAlign: 'left',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});
export default MovieInfo;
