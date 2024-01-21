import React from 'react'
import { GlobalStyles, windowHeight } from '../../styles/globalStyles';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function Information() {
    return (
        <View style={styles.rectangle}>
            <View style={GlobalStyles.defaultContainer}>
                <Text style={GlobalStyles.title}>
                    INFORMATION
                </Text>
                <Text style={GlobalStyles.mediumFontSize}>
                    {'\n'}
                Bushfires are burning across Australia, with particularly intense, dangerous fires in New South Wales, Victoria and South Australia. The scale and intensity of the bushfires are unprecedented. Stay updated to ensure your safety at all times. 
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        ...GlobalStyles.containerAlignleft,
        // height: windowHeight * 0.2
    },
    smallBoldFontSize: {
        ...GlobalStyles.smallBoldFontSize,
        paddingLeft: '6%',
        paddingRight: '10%'
    }
});