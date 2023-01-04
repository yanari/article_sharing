import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import Article from '../components/Article';

const Home: () => Node = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const createFakeArticles = async () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json))
        .catch((error) => setError(true));
    };
    createFakeArticles();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Article
        body={item.body}
        title={item.title}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>News</Text>
      {error ? <Text>There was an error.</Text> : (
        <FlatList
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6E9F26',
  },
  body: {
    fontSize: 54,
    color: 'red',
  },
});

export default Home;
