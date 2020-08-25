import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = ({title}) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title={title} subtitle="Beta 1.0"></Appbar.Content>
    </Appbar.Header>
  );
};

export default Header;
