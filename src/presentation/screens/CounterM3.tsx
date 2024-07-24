import {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button as ButtonRNP, FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3 = () => {
  const [number, setNumber] = useState(10);

  const increment = () => {
    setNumber(number + 1);
  };
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>Hello Counter {number}</Text>

      <Icon name="add-outline" size={25} />
      <FAB
        label="Hola"
        style={globalStyles.buttonFAB}
        onPress={() => increment()}
        onLongPress={() => setNumber(0)}
        icon="add"
      />
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
