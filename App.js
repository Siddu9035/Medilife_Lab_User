import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Auth from './Screens/Navigators/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './Screens/Navigators/MainStack';
import SpalshScreen from './Screens/SpalshScreen';

const Stack = createStackNavigator();
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {showSplash && (
            <Stack.Screen
              name="Splash"
              component={SpalshScreen}
              options={{headerShown: false}}
            />
          )}
          {Auth(Stack)}
          {MainStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
