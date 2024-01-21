import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton(props) {
  const { onPress, styles={}, title = 'button' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
