import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text style={styles.title}> Box OBJJJ</Text>
      </View>

      <View style={styles.purpleBox}>
        <Text style={styles.title}> Box OBJJJ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    padding: 2,
  },
  purpleBox: {
    height:80,
    backgroundColor: 'purple',
    marginHorizontal:20,
    marginVertical:60,
    padding:20,
  },
});
