import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import BottomTabs from './navigations/BottomTabs';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Header from './components/Header';
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

  setTimeout(() => setLoading(false), 3000);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.other} />
      {!loading ? (
        <Animatable.View animation="slideInUp" duration={500} style={{flex: 1}}>
          <Header title="Moviefy" />
          <BottomTabs />
        </Animatable.View>
      ) : (
        <LoadingScreen />
      )}
    </PaperProvider>
  );
};
export default App;
