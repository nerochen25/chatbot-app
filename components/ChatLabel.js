import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

const ChatLabel = ({ hostName }) => {
  const { firstName, lastName } = hostName;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../smile-face.png')} style={styles.image} />
      <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // top: 0,
    marginTop: 10,
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf4f6',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    textAlign: 'left',
    padding: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 30,
  },
});

export default ChatLabel;
