import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import DrawerNavigation from './navigations/DrawerNavigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LoadingScreen from './screens/LoadingScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E35A9',
    accent: '#f1c40f',
    other: '#3C58E5',
  },
};

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.other} />
      {!loading ? (
        <>
          <Animatable.View
            animation="slideInUp"
            duration={500}
            style={{flex: 1}}>
            <DrawerNavigation />
          </Animatable.View>
        </>
      ) : (
        <LoadingScreen />
      )}
    </PaperProvider>
  );
};
export default App;
