import React from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Avatar, Title, Caption, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View animation="slideInRight" style={styles.userData}>
          <Avatar.Image size={80} source={require('../assests/person.png')} />
          <View>
            <Title>User</Title>
            <Caption>user@moviefy.com</Caption>
          </View>
        </View>
        <View animation="slideInLeft" style={styles.menu}>
          <Drawer.Item
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <Drawer.Item
            icon={({color, size}) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          />
          <Drawer.Item
            icon={({color, size}) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Support"
            onPress={() => {
              ToastAndroid.show('Not available yet!', ToastAndroid.BOTTOM);
            }}
          />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Logout"
          style={styles.logout}
          onPress={() => {
            ToastAndroid.show('Not available yet!', ToastAndroid.BOTTOM);
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    borderTopWidth: 1,
  },
  container: {
    flex: 1,
    padding: 0,
  },
  userData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    padding: 10,
  },
  menu: {
    flex: 2,
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
});

export default DrawerContent;
