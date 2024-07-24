import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />

      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />

      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />

      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />

      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box3]} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection:'column',
    justifyContent: 'space-evenly',    
    alignItems:'stretch',    
    flexWrap:'wrap',
    gap: 10,

  },
  box:{
    width: 100,
    height: 100,        
    borderWidth: 3,
    borderColor: 'white'
  },
  box1: {
    backgroundColor: '#5ce95c',
    
  },
  box2: {
    backgroundColor: '#c01515',
    
    
    
  },
  box3: {
    backgroundColor: '#1a1952',
    
  },
});
