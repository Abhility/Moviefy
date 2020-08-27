import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {httpRequest} from '../helpers/httpClient';
import * as Animatable from 'react-native-animatable';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/AntDesign';

const MovieVideosScreen = ({route}) => {
  const {movieId} = route.params;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState();

  const API_URL = `https://moviefy.glitch.me/movie-info/getmovie/${movieId}/videos`;

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = await httpRequest(API_URL, 'GET', null);
      data = data.results.filter((video) => video.site === 'YouTube');
      setLoading(false);
      setVideos(data);
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
            alignSelf: 'center',
            width: 100,
            height: 100,
          }}
          source={require('../assests/spinner.gif')}
        />
      ) : (
        <Animatable.View animation="bounceInUp">
          {videos.length ? (
            <FlatList
              data={videos}
              keyExtractor={(video) => video.key}
              renderItem={(video) => (
                <Card
                  style={{paddingHorizontal: 3, marginBottom: 10}}
                  elevation={4}>
                  <YouTube
                    videoId={video.item.key}
                    apiKey="AIzaSyCyoDa4QajAQZ7j_aJ7JypYs1qT5Ex3I5M"
                    style={{alignSelf: 'stretch', height: 300}}
                  />
                  <Card.Title
                    style={{alignSelf: 'center'}}
                    title={video.item.name}
                    subtitle={video.item.type}
                  />
                </Card>
              )}
            />
          ) : (
            <View style={{alignItems: 'center', marginVertical: 40}}>
              <Icon name="frowno" color="red" size={80} />
              <Title>No Videos found...</Title>
            </View>
          )}
        </Animatable.View>
      )}
    </>
  );
};

export default MovieVideosScreen;
