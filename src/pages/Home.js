import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Article from '../components/Article';

const Home: () => Node = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const createFakeArticles = async () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json))
    };
    createFakeArticles();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>News</Text>
      {posts.map((post) => {
        return (
          <Article
            key={post.id}
            body={post.body}
            title={post.title}
          />
        )
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    marginHorizontal: 16,
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  body: {
    fontSize: 54,
    color: 'red',
  },
});

export default Home;
