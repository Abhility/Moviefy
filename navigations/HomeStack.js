import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import BottomTabs from './BottomTabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieVideosScreen from '../screens/MovieVideosScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerStyle={{backgroundColor: '#1E35A9'}}>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetailsScreen}
        options={({route}) => {
          return {title: route.params.name};
        }}
      />
      <Stack.Screen
        name="Videos"
        component={MovieVideosScreen}
        options={({route}) => {
          return {title: `${route.params.name}'s Videos`};
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
