import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  box1: {
    backgroundColor: '#5f5ce9',
    flex:1,
  },
  box2: {
    backgroundColor: '#343385',
    flex:1,
  },
  box3: {
    backgroundColor: '#1a1952',
    flex:1,
  },
});
