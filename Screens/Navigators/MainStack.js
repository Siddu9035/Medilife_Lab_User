import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import LabRequestPortal from '../LabRequestPortal';
import OrderDetail from '../OrderDetail';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen
        name="LabRequest"
        component={LabRequestPortal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
