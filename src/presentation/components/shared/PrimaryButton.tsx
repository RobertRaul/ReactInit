import React, {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Propiedades {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Propiedades) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({pressed}) => [
        styles.btnPressable,
        pressed && styles.btnPressablePressed,
      ]}>
      <Text style={styles.textBtn}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnPressable: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB',
  },
  btnPressablePressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
