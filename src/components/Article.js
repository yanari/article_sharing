/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Alert,
} from 'react-native';
import { ShareIcon } from './Icon';

type Props = {
  title: string,
  body: string,
};

const Article = ({title, body}: Props): Node => {
  const shareArticle = async () => {
    const emailBody = `Check out this interesting article: https://example.com`;
    const link = `mailto:?subject=${title}&body=${emailBody}\n\n${body}`;
    try {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        Linking.openURL(link);
      } else {
        Alert.alert('Error', `Unable to open ${link}.`);
      }
    } catch {
      Alert.alert('Error', `Unable to open ${link}.`);
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.articleTitle}>
          {title}
        </Text>
        <ShareIcon onPress={shareArticle}/>
      </View>
      <Text style={styles.articleBody}>
        {body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 4,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  articleTitle: {
    color: '#6E9F26',
    fontWeight: 'bold',
    flex: 1
  },
  articleBody: {
    color: '#777'
  },
});

export default Article;