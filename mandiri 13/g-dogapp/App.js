import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';

const Stack = createStackNavigator();

const App = () => (
  
  <NavigationContainer>
    <Stack.Navigator
      NameScreen="Login"
    >
      {screens.map((screen) => (
        <Stack.Screen
          name={screen.name}
          key={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
