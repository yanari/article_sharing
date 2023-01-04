import React from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const ShareIcon = (props) => {
  const getIconBrand = () => {
    if (Platform.os === 'ios') {
      return 'share-apple';
    } else {
      return 'share-google';
    }
  };

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Icon name={getIconBrand()} size={30} color="#6E9F26" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8
  },
});