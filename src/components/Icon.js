import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const ShareIcon = (props) => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Icon name="share-google" size={30} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 8
  },
});