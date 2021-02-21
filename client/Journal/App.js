import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './src/navigation'
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

const store = configureStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;