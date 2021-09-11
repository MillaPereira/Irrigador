import React from 'react';
import {View, Image, ImageBackground} from 'react-native'
import {styles} from './styles';

export default function Background({children}) {
  const backgroundImage = require('../../assets/fundo.png');
  //<Image source={backgroundImage} style={styles.background}/>
  return (
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
  );
}