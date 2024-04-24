import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from '../AuthScreens/LoginPage';
import ForgotPassword from '../AuthScreens/ForgotPassword';
import OtpScreen from '../AuthScreens/OtpScreen';
import CreateNewPassWord from '../AuthScreens/CreateNewPassWord';

const Auth = Stack => {
  return (
    <>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateNewPass"
        component={CreateNewPassWord}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({});
