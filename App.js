/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ChatBot from './components/ChatBot';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ChatBot />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf4f6',
  },
});

export default App;
