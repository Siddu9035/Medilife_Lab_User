import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
import ProfileIcon from '../assets/images/profile.svg';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../styles/Dimensions';
import FontFamily from '../styles/FontFamily';
import TabRoutes from './Components/TabRoutes';

const {width, height} = Dimensions.get('window');
const LabRequestPortal = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lab Request Portal</Text>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <ProfileIcon width={horizontalScale(30)} height={verticalScale(30)} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <TabRoutes />
      </View>
    </SafeAreaView>
  );
};

export default LabRequestPortal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultWhiteBackgroundColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
  },
  headerText: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
    color: Colors.headingTextColor,
  },
  profileIcon: {
    backgroundColor: Colors.inputFieldColor,
    width: width * 0.12,
    height: height * 0.06,
    borderRadius: responsiveBorderRadius(8),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  subContainer: {
    flex: 1,
  },
});
