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
    width: 35,
    height: 35,
    marginLeft: 25,
  },
});

export default ChatLabel;
