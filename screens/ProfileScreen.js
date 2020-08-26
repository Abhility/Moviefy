import React from 'react';
import Header from '../components/Header';
import * as Animatable from 'react-native-animatable';
import {Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <Header title="Moviefy" navigation={navigation} />
      <Animatable.View
        animation="fadeInUp"
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <TextInput label="Search here" value="" mode="outlined" /> */}
        <Text style={{fontSize: 25, marginBottom: 20}}>Coming soon...</Text>
        <TouchableOpacity>
          <Button
            mode="contained"
            tyle={{fontSize: 25}}
            onPress={() => {
              navigation.navigate('explore');
            }}>
            Home
          </Button>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
};

export default ProfileScreen;
