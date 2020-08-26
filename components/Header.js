import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = ({title, navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Appbar.Content title={title} subtitle="Beta 1.0"></Appbar.Content>
    </Appbar.Header>
  );
};

export default Header;
