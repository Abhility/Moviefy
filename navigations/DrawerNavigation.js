import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
