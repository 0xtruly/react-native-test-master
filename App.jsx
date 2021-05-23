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
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';
import MainApp from './src/navigation/AppNavigation';

const App = () => (
  <Provider store={store}>
    {/* <StatusBar barStyle="dark-content" /> */}
    <SafeAreaView style={{ flex: 1 }}>
      <MainApp />
    </SafeAreaView>
  </Provider>
);

export default App;
