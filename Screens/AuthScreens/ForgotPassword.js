import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../../styles/Dimensions';
import ArrowLeft from '../../assets/images/arrowLeft.svg';
import FontFamily from '../../styles/FontFamily';
import ErrorIcon from '../../assets/images/error2.svg';
import Colors from '../../styles/Colors';

const {width, height} = Dimensions.get('window');
const ForgotPassword = ({navigation}) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    email: '',
  });

  const [showError, setShowError] = useState({
    email: false,
  });

  const emailRegex = /^\S+@\S+\.\S{2,3}$/;

  const isFormValid = () => {
    return emailRegex.test(userDetails.email);
  };

  const notValidcolors = [
    Colors.linearGradient1,
    Colors.linearGradient2,
    Colors.linearGradient3,
    Colors.linearGradient4,
  ];

  const validColors = [Colors.primaryButtonColor1, Colors.primaryButtonColor2];

  const handleButtonClick = () => {
    if (!emailRegex.test(userDetails.email)) {
      setErrorMsg({
        ...errorMsg,
        email: 'The entered email has not been registered',
      });
      setShowError({...showError, email: true});
    } else {
      setShowError({
        ...showError,
        email: false,
      });
      navigation.navigate('Otp');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/forgotPassword.png')}
          style={styles.backImage}>
          <LinearGradient
            style={styles.gradientImage}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 0.0}}
            colors={['#1877A3', '#0E3067']}
          />
        </ImageBackground>
        <View style={styles.subContainer}>
          <View style={styles.navigationContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <ArrowLeft
                width={horizontalScale(28)}
                height={verticalScale(28)}
              />
            </TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </View>
          <Text style={styles.regiEmailText}>
            Please enter your registered email.
          </Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            placeholderTextColor={'#00C6B0'}
            onChangeText={e => {
              setUserDetails({
                ...userDetails,
                email: e,
              });
              setShowError({
                ...showError,
                email: false,
              });
            }}
          />
          {showError.email && (
            <View style={styles.errorContainer}>
              <ErrorIcon
                width={horizontalScale(15)}
                height={verticalScale(15)}
              />
              <Text style={styles.errorText}>{errorMsg.email}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.submitButton}
            disabled={!isFormValid()}
            onPress={() => {
              handleButtonClick();
            }}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              locations={isFormValid() ? [0.0, 1.0] : [0, 0.0, 0.0, 0]}
              style={styles.gradeintButton}
              colors={isFormValid() ? validColors : notValidcolors}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: isFormValid()
                      ? Colors.textColor
                      : Colors.disablebuttonColor,
                  },
                ]}>
                Sumbit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    width: width,
    height: height * 0.6,
    opacity: 0.7,
  },
  gradientImage: {
    width: width,
    height: height * 0.6,
  },
  subContainer: {
    backgroundColor: '#F4F4F4',
    marginTop: pixelSizeVertical(-45),
    flex: 1,
    borderTopLeftRadius: responsiveBorderRadius(45),
    borderTopRightRadius: responsiveBorderRadius(45),
    paddingLeft: pixelSizeHorizontal(20),
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: pixelSizeVertical(20),
  },
  forgotPasswordText: {
    color: '#0E4B67',
    paddingLeft: pixelSizeHorizontal(20),
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
  },
  regiEmailText: {
    color: '#0E4B67',
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
  },
  emailInput: {
    width: width * 0.9,
    height: height * 0.075,
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: responsiveBorderRadius(4),
    borderTopRightRadius: responsiveBorderRadius(4),
    paddingHorizontal: pixelSizeHorizontal(15),
    marginTop: pixelSizeVertical(40),
    elevation: 2,
    color: '#1D1B20',
  },
  submitButton: {
    width: width * 0.4,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(5),
    alignSelf: 'center',
    marginTop: pixelSizeVertical(90),
  },
  gradeintButton: {
    width: width * 0.4,
    height: verticalScale(50),
    borderRadius: responsiveBorderRadius(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    // color: '#888888',
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(12),
    paddingLeft: pixelSizeHorizontal(4),
  },
});
