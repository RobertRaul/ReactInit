import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Properties {
  name?: string;
}

const HelloWorldScreen = ({name='Robert Raul'}: Properties) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}  ellipsizeMode="head">Hello World de parte de {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    padding: 20,
  },
});



export default HelloWorldScreen
