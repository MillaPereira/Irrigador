import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {theme} from "../../global/styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#86DB78',
    opacity: 0.77,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeContainer: {
    width: '80%',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position: 'absolute'
  },
  button: {
    height: 50,
    width: '70%',
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    fontSize: 17,
  },
  input: {
    height: 40,
    margin: 12,
    width: '50%',
    borderColor: theme.colors.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.darkGreen,
    padding: 10,
    textAlign: 'center',
  },
  textoBotao: {
    color: theme.colors.darkGreen,
  }
});