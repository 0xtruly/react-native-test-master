/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigation />
    </SafeAreaView>
  </Provider>
);

export default App;
