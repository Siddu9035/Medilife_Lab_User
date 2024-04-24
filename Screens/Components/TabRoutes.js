import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewRequest from '../TopTabScreens/NewRequest';
import SamplesCollected from '../TopTabScreens/SamplesCollected';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  responsiveBorderRadius,
  verticalScale,
} from '../../styles/Dimensions';
import Colors from '../../styles/Colors';
import FontFamily from '../../styles/FontFamily';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');
const TabRoutes = props => {
  const {count} = props;
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.headingTextColor,
        tabBarInactiveTintColor: Colors.headingTextColor,
        tabBarContentContainerStyle: {
          height: height * 0.06,
        },
        tabBarStyle: {
          backgroundColor: Colors.defaultWhiteBackgroundColor,
          elevation: 0,
          width: width * 0.9,
          alignSelf: 'center',
        },
        tabBarIndicatorStyle: {
          width: width * 0.43,
          backgroundColor: Colors.headingTextColor,
        },
        tabBarPressColor: Colors.defaultWhiteBackgroundColor,
      }}>
      <Tab.Screen
        name="NewRequest"
        component={NewRequest}
        options={{
          // tabBarIcon: ({}) => (
          //   <View
          //     style={{
          //       width: width * 0.5,
          //       height: verticalScale(40),
          //       alignItems: 'center',
          //       alignSelf: 'center',
          //       justifyContent: 'center',
          //     }}>
          //     <Text
          //       style={{
          //         color: Colors.headingTextColor,
          //         fontFamily: FontFamily.regular,
          //         fontSize: fontPixel(16),
          //       }}>
          //       New Requests
          //     </Text>
          //   </View>
          // ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: Colors.headingTextColor,
                fontFamily: focused ? FontFamily.medium : FontFamily.regular,
                fontSize: fontPixel(16),
                width: width * 0.45,
                // textAlign: 'center',
                paddingLeft: pixelSizeHorizontal(20),
              }}>
              New Requests
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="SampleCollect"
        component={SamplesCollected}
        options={{
          // tabBarIcon: ({}) => (
          //   <View
          //     style={{
          //       width: width * 0.4,
          //       height: verticalScale(40),
          //       alignItems: 'center',
          //       alignSelf: 'center',
          //       justifyContent: 'center',
          //     }}>
          //     <Text
          //       style={{
          //         color: Colors.headingTextColor,
          //         fontFamily: FontFamily.regular,
          //         fontSize: fontPixel(16),
          //       }}>
          //       Samples Collected
          //     </Text>
          //   </View>
          // ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: Colors.headingTextColor,
                fontFamily: focused ? FontFamily.medium : FontFamily.regular,
                fontSize: fontPixel(16),
                width: width * 0.45,
                textAlign: 'center',
              }}>
              Samples Collected
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;

const styles = StyleSheet.create({});
