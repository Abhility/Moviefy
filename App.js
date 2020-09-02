import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import DrawerNavigation from './navigations/DrawerNavigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LoadingScreen from './screens/LoadingScreen';
import {colors} from './helpers/constants';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './helpers/AuthContext';
import HomeStack from './navigations/HomeStack';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [watchList, setWatchList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  setTimeout(() => setLoading(false), 2000);

  const login = () => {
    setWatchList([577922, 284054]);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setWatchList([]);
    setIsLoggedIn(false);
  };

  const addToWatchList = (movieId) => {
    console.log('add', movieId);
    setWatchList((prevWatchList) => [...prevWatchList, movieId]);
  };

  const removeFromWatchList = (movieId) => {
    console.log('remove', movieId);
    setWatchList((prevWatchList) =>
      prevWatchList.filter((id) => id !== movieId),
    );
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.other} />
      {!loading ? (
        <>
          <AuthContext.Provider
            value={{
              isLoggedIn,
              login,
              logout,
              watchList,
              addToWatchList,
              removeFromWatchList,
            }}>
            <Animatable.View
              animation="slideInDown"
              duration={500}
              style={{flex: 1}}>
              {isLoggedIn ? (
                <DrawerNavigation />
              ) : (
                <NavigationContainer>
                  <HomeStack />
                </NavigationContainer>
              )}
            </Animatable.View>
          </AuthContext.Provider>
        </>
      ) : (
        <LoadingScreen />
      )}
    </PaperProvider>
  );
};
export default App;
