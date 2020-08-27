import React, {useState, useEffect} from 'react';
import {Image, ScrollView, Text} from 'react-native';
import {httpRequest} from '../helpers/httpClient';
import * as Animatable from 'react-native-animatable';
import {Title} from 'react-native-paper';

const Posters = ({movieId}) => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState();

  const imagePath = 'https://image.tmdb.org/t/p/original';
  const API_URL = `https://moviefy.glitch.me/movie-info/getmovie/${movieId}/images`;

  const fetchData = async () => {
    setLoading(true);
    try {
      let data = await httpRequest(API_URL, 'GET', null);
      data = data.backdrops
        .map((poster) => {
          return {...poster, file_path: imagePath + poster.file_path};
        })
        .slice(0, 15);
      setLoading(false);
      setPosters(data);
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
        <Animatable.View animation="slideInLeft">
          <Title style={{alignSelf: 'center', fontSize: 30, marginVertical: 5}}>
            Images
          </Title>
          <ScrollView horizontal={true} style={{padding: 10}}>
            {posters.map((poster, index) => (
              <Image
                source={{uri: poster.file_path}}
                style={{
                  width: 150,
                  height: 150,
                  marginHorizontal: 10,
                  marginVertical: 5,
                  backgroundColor: '#E2E3E4',
                  resizeMode: 'stretch',
                }}
                key={index}
              />
            ))}
          </ScrollView>
        </Animatable.View>
      )}
    </>
  );
};

export default Posters;
