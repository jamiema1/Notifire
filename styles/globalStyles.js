import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  globalStyles: {
    // fontFamily: "Calibri",

  },
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
  flextangle: {
    flex: 1
    // flexDirection: 'row'
  },
  smallFontSize: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Barlow',
    padding: 10
  },
  smallBoldFontSize: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'BarlowBold',
    padding: 10
  },
  mediumFontSize: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Barlow',
    padding: 10
  },
  mediumBoldFontSize: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'BarlowBold',
    padding: 10
  },
  largeFontSize: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Barlow',
    padding: 10
  },
  largeBoldFontSize: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'BarlowBold',
    padding: 10
  },
  numberProperties: {
    fontSize: 48,
    color: 'white',
    fontFamily: "BarlowBold",
    // padding: 10
  },
  backgroundColor: {
    backgroundColor: '#161F33'
  },
  images: {
    // height: '100%',
    // width: '100%',
  },
  defaultContainer: {
    flex: 1,
    borderRadius: 10,
    // padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#2C3445',
  },
});