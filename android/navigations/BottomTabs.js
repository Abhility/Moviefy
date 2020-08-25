import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../../screens/SearchScreen';
import HomeScreen from '../../screens/HomeScreen';
import TrendingScreen from '../../screens/TrendingScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: '#1E35A9'}}
        initialRouteName="home">
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="movie-search"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="trending"
          component={TrendingScreen}
          options={{
            tabBarLabel: 'Trending',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="trending-up"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabs;
