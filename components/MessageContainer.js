import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';

const MessageContainer = ({ hostName, responses }) => {
  const scrollRef = useRef();

  const Response = (response) => {
    const { userType, text } = response.response;
    const responderStyle = userType === 'customer' ? 'customerResponder' : 'hostResponder';
    const responder = userType === 'customer' ? 'You' : hostName.firstName;
    return (
      <View style={styles.item}>
        <Text style={styles[responderStyle]}>{responder}:</Text>
        <Text style={styles.messageText}>{text}</Text>
      </View>
    );
  };

  const renderResponse = (response) => {
    return <Response response={response.item} />;
  };

  const scrollToEnd = () => {
    scrollRef.current.scrollToEnd({ animated: true })
  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        ref={scrollRef}
        style={styles.flatList}
        data={responses}
        renderItem={renderResponse}
        keyExtractor={(item, id) => id.toString()}
        onContentSizeChange={scrollToEnd}
        persistentScrollbar={true}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
  flatList: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    overflow: 'scroll',
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    // padding: 10,
  },
  hostResponder: {
    fontWeight: 'bold',
    color: '#57677e',
    fontSize: 18,
    padding: 10,
    paddingBottom: 0,
    margin: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  customerResponder: {
    fontWeight: 'bold',
    color: '#6FA9FF',
    fontSize: 18,
    padding: 10,
    paddingBottom: 0,
    margin: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  item: {
    marginVertical: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#9ea2a7',
    letterSpacing: 1,
    textAlign: 'left',
    padding: 10,
    paddingTop: 3,
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 10,
  },
});

export default MessageContainer;
