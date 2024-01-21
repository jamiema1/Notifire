import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const windowHeight = Dimensions.get('screen').height;
export const windowWidth = Dimensions.get('screen').width;

export const GlobalStyles = StyleSheet.create({
  containerAlignleft: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'left'
  },
  containerAlignCenter: {
    borderRadius: 10,
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'BarlowBold',
    paddingLeft: '6%'
  },
  smallFontSize: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Barlow'
  },
  smallBoldFontSize: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'BarlowBold'
  },
  mediumFontSize: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Barlow',
    paddingLeft: '6%',
    paddingRight: '3%'
  },
  mediumBoldFontSize: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'BarlowBold'
  },
  largeFontSize: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Barlow'
  },
  largeBoldFontSize: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'BarlowBold'
  },
  extraLargeBoldFontSize: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'BarlowBold'
  },
  numberProperties: {
    fontSize: 48,
    color: 'white',
    fontFamily: "BarlowBold"
  },
  backgroundColor: {
    backgroundColor: '#161F33'
  },
  smallImages: {
    height: 15,
    width: 15,
  },
  defaultContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#2C3445',
  },
});