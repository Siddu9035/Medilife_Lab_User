import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LogoIcon from '../assets/images/logo.svg';
import SubLogoIcon from '../assets/images/subLogo.svg';
import {
  fontPixel,
  horizontalScale,
  pixelSizeVertical,
  verticalScale,
} from '../styles/Dimensions';
import Colors from '../styles/Colors';
import FontFamily from '../styles/FontFamily';
import Loader from './Components/Loader';

const {width, height} = Dimensions.get('window');
const SpalshScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.imageBack}
        source={require('../assets/images/splashBack.png')}>
        <View style={styles.logoContainer}>
          <LogoIcon width={horizontalScale(220)} height={verticalScale(100)} />
        </View>
        <View style={styles.subLogoContainer}>
          <Text style={styles.powerdByText}>Powered by</Text>
          <SubLogoIcon
            width={horizontalScale(150)}
            height={verticalScale(70)}
          />
        </View>
        <Loader />
      </ImageBackground>
    </View>
  );
};

export default SpalshScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    height: height,
    width: width,
  },
  logoContainer: {
    // borderWidth: 1,
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subLogoContainer: {
    // borderWidth: 1,
    flex: 0.34,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  powerdByText: {
    color: Colors.splashScreenTextcolor,
    fontSize: fontPixel(14),
    fontFamily: FontFamily.regular,
  },
});
