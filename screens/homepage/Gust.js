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
export default function Gust({ direction, gust }) {
    function getGustDisplayNumber() {
        return (
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '3%',
            }}>
                <Text style={GlobalStyles.numberProperties}>
                    {gust}
                </Text>
            </View>
        )
    }

    function getGustStringAndDirection() {
        return (
            <View style={{
                // width: '50%',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <Text style={styles.kmh}>
                    km/h
                </Text>
                <Image
                    style={GlobalStyles.smallImages}
                    source={arrows[direction]}
                />
            </View>
        )
    }

    return (
        <View style={styles.rectangle}>
            <View style={GlobalStyles.defaultContainer}>
                <Text style={styles.smallBoldFontSize}>
                    GUSTS
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    {getGustDisplayNumber()}
                    {getGustStringAndDirection()}
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    rectangle: {
        ...GlobalStyles.containerAlignleft,
        // height: windowHeight * 0.17
    },
    smallBoldFontSize: {
        ...GlobalStyles.smallBoldFontSize,
        paddingLeft: '15%'
    },
    kmh: {
        ...GlobalStyles.largeFontSize,
        paddingBottom: 5
    }
});