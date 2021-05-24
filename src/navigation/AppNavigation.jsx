import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './stack/MainStack';

const AppNavigation = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
export default AppNavigation;
