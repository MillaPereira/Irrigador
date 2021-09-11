import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {StatusBar} from 'react-native';
import Background from './src/pages/Background';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Background>
       <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
