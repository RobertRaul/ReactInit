import {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button as ButtonRNP} from 'react-native-paper';

export const CounterScreen = () => {
  const [number, setNumber] = useState(10);

  const increment = () => {
    setNumber(number + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Counter {number}</Text>
      <PrimaryButton
        label="Incrementar"
        onPress={() => increment()}
        onLongPress={() => setNumber(0)}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <ButtonRNP        
      mode="contained"
        onPress={() => increment()}
        onLongPress={() => setNumber(0)}
      >      
      <Text>
        Button React Native Paper
      </Text>
      </ButtonRNP>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
