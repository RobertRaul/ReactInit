import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import { CounterM3 } from './src/presentation/screens/CounterM3';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';

export const App = () => {
  return (
    <PaperProvider 
    settings={{
      icon:(props) =><IonIcon {...props} />
    }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Robert Siuuuuuu" />         */}

        {/* <CounterScreen /> */}
        {/* <CounterM3 /> */}
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
