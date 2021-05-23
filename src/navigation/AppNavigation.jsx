import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stack/UserStack';

const MainApp = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
export default MainApp;
