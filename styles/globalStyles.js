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
    // padding: 10
  },
  smallBoldFontSize: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'BarlowBold'
  },
  mediumFontSize: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Barlow'
  },
  mediumBoldFontSize: {
    fontSize: 14,
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
  images: {
    // height: '100%',
    // width: '100%',
  }
});