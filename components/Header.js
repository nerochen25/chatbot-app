import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

const Header = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Live Support</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#132847',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#9daaba',
    letterSpacing: 1,
    textAlign: 'center',
    marginLeft: 30,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 30,
  },
});

export default Header;
