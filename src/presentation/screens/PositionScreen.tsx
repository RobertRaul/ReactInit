import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      

      <View style={style.pinkBox} />

      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 500,
    height: 250
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor:'purple',
    borderColor: 'white',
    borderWidth:10,
    // top: 0,    
    bottom :0,
    position: 'absolute'
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor:'orange',
    borderColor: 'green',
    borderWidth:10,
    // top: 50,    
    right:0,
    position: 'absolute'
  },
  pinkBox: {
    flex:1,
    // width: 100,
    // height: 100,
    backgroundColor:'pink',
    borderColor: 'skyblue',
    borderWidth:10,
// absoluteFillObject toma todo lo de el codigo de abajo
    ...StyleSheet.absoluteFillObject

    // position: 'absolute',
    // bottom:0,
    // right:0,
    // left:0,
    // top:0,
  },
});
