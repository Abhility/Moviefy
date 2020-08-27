import React, {useState, useEffect} from 'react';
import {httpRequest} from '../helpers/httpClient';
import {Image, ScrollView, View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const MovieCast = ({movieId}) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState();

  const imagePath = 'https://image.tmdb.org/t/p/original/';

  const API_URL = `https://moviefy.glitch.me/movie-info/getmovie/${movieId}/credits`;

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = await httpRequest(API_URL, 'GET', null);
      data = data.cast
        .filter((actor) => actor.profile_path !== null)
        .map((actor) => {
          return {
            ...actor,
            profile_path: imagePath + actor.profile_path,
          };
        });
      setLoading(false);
      setCast(data);
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
        <>
          <Title
            style={{
              alignSelf: 'center',
              fontSize: 30,
              marginVertical: 5,
            }}>
            Cast
          </Title>
          <Animatable.View animation="slideInRight" delay={2000}>
            <ScrollView horizontal={true} style={styles.cast}>
              {cast.map((actor) => (
                <View style={styles.actor} key={actor.cast_id}>
                  <Avatar.Image
                    source={{uri: actor.profile_path}}
                    style={{
                      backgroundColor: 'white',
                    }}></Avatar.Image>
                  <Title>{actor.name.split(' ')[0]}</Title>
                </View>
              ))}
            </ScrollView>
          </Animatable.View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 30,
    marginVertical: 10,
  },
  cast: {
    margin: 5,
  },
  actor: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
export default MovieCast;
