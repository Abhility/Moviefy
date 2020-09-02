import React, {useContext} from 'react';
import {Appbar} from 'react-native-paper';
import {AuthContext} from '../helpers/AuthContext';
import {View} from 'react-native';

const Header = ({title, navigation}) => {
  const {isLoggedIn, login, logout, watchList} = useContext(AuthContext);
  return (
    <Appbar.Header>
      {isLoggedIn && (
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      )}
      <Appbar.Content
        title={`${title} -- ${watchList.length}`}
        subtitle="Beta 1.0"
        style={{marginHorizontal: 10}}></Appbar.Content>
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => {
          console.log('clicked');
          login();
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
