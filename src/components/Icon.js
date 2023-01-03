import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const ShareIcon = () => (
  <TouchableOpacity onPress={() => {}} style={styles.button}>
    <Icon name="share-google" size={30} color="#900" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    // alignItems: "center",
    padding: 8
  },
});