import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const neArrow = require('../../assets/images/icons-arrow-ne.png')
const nwArrow = require('../../assets/images/icons-arrow-nw.png')
const seArrow = require('../../assets/images/icons-arrow-se.png')
const swArrow = require('../../assets/images/icons-arrow-sw.png')

const arrows = {
    "NE": neArrow,
    "NW": nwArrow,
    "SE": seArrow,
    "SW": swArrow
}

export default function Wind({ direction, wind }) {
    function getWindQualityDisplayNumber() {
        return (
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '3%',
            }}>
                <Text style={GlobalStyles.numberProperties}>
                    {wind}
                </Text>
            </View>
        )
    }


    function getWindStringAndDirection() {
        return (
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <Text style={GlobalStyles.largeFontSize}>
                    km/h
                    {'\n'}
                    <Image
                        style={GlobalStyles.smallImages}
                        source={arrows[direction]}
                    />
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.rectangle}>
            <View style={GlobalStyles.defaultContainer}>
                <Text style={styles.smallBoldFontSize}>
                    WIND
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    {getWindQualityDisplayNumber()}
                    {getWindStringAndDirection()}
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    rectangle: {
        ...GlobalStyles.containerAlignleft,
        height: windowHeight * 0.17
    },
    smallBoldFontSize: {
        ...GlobalStyles.smallBoldFontSize,
        paddingLeft: '6%'
    },
});