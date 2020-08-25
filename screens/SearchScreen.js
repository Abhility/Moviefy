import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {Modal, TextInput, IconButton, Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const SearchScreen = ({navigation}) => {
  return (
    <>
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
              navigation.jumpTo('home');
            }}>
            Home
          </Button>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
};

export default SearchScreen;
