import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {Dimensions} from 'react-native';



export const DimensionScreen = () => {

const {width, height} =useWindowDimensions();

  return (
    <View style={style.container}>
      <View style={{
        ...style.purpleBox,
        width: width * 0.60
      }}></View>

      <Text style={style.title}> w: {width} h: {height} </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 200,
    width: 300,
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: '50%',
    width: '50%',
  },
  title:{
    fontSize:20
  }
});
