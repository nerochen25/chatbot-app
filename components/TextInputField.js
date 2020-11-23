import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const TextInputField = ({ questionID, text, handleOnChange, handleOnPress }) => {
  const buttonDisabled = text === '' ? true : false;
  const buttonStyle = buttonDisabled ? 'buttonDisabled' : 'buttonEnabled';
  const textInputDisabled = questionID === -1 ? false : true;
  const passwordInput = questionID === 5 ? true : false;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(text) => handleOnChange(text)}
        placeholder="Type here..."
        editable={textInputDisabled}
        keyboardType='default'
        secureTextEntry={passwordInput}
      />
      <TouchableOpacity
        style={styles[buttonStyle]}
        onPress={handleOnPress}
        disabled={buttonDisabled}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 80,
    borderColor: '#d1e1f8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '65%',
    backgroundColor: '#fff',
  },
  container: {
    flex: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ecf4f6',
    width: '100%',
    marginTop: 15,
    // marginLeft: 15,
    // marginRight: 15,
  },
  buttonEnabled: {
    alignItems: 'center',
    backgroundColor: '#4f93fe',
    justifyContent: 'center',
    borderRadius: 5,
    width: '30%',
  },
  buttonDisabled: {
    alignItems: 'center',
    backgroundColor: '#9a9ea3',
    justifyContent: 'center',
    borderRadius: 5,
    width: '30%',
  },
  sendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TextInputField;
