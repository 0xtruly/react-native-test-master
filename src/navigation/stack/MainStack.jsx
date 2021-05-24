import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../../screens/users/Users';
import Initial from '../../screens/Initial';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Initial">
    <Stack.Screen
      name="Users"
      component={Users}
      options={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#F1F1F1' },
        headerLeft: () => (
          null
        ),
      }}
    />
    <Stack.Screen
      name="Initial"
      component={Initial}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
export default MainStack;
