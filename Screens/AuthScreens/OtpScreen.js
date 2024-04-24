import {
  Dimensions,
  ImageBackground,
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
import Colors from '../../styles/Colors';
import FontFamily from '../../styles/FontFamily';
import ArrowLeft from '../../assets/images/arrowLeft.svg';
import ErrorIcon from '../../assets/images/error2.svg';
import OtpInputs from 'react-native-otp-inputs';

const {width, height} = Dimensions.get('window');

const OtpScreen = ({navigation}) => {
  const [userDetails, setUserDetails] = useState({
    otp: '',
  });
  console.log('🚀 ~ OtpScreen ~ userDetails:', userDetails);
  const [errorMsg, setErrorMsg] = useState({
    otp: '',
  });

  const [showError, setShowError] = useState({
    otp: false,
  });

  const otpRegex = /^[0-9]+$/;

  const isFormValid = () => {
    return userDetails.otp.length === 4;
  };

  const notValidcolors = [
    Colors.linearGradient1,
    Colors.linearGradient2,
    Colors.linearGradient3,
    Colors.linearGradient4,
  ];

  const validColors = [Colors.primaryButtonColor1, Colors.primaryButtonColor2];

  const handleButtonClick = () => {
    if (!otpRegex.test(userDetails.otp)) {
      setErrorMsg({
        ...errorMsg,
        otp: 'The entered otp is invalid',
      });
      setShowError({...showError, otp: true});
    } else {
      setShowError({
        ...showError,
        otp: false,
      });
        navigation.navigate('CreateNewPass');
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
            <Text style={styles.forgotPasswordText}>
              Password recovery code
            </Text>
          </View>
          <Text style={styles.regiEmailText}>
            Enter the code sent to johndoe.89@gmail.com
          </Text>
          <View style={styles.inputContainers}>
            <OtpInputs
              style={styles.inputFields}
              numberOfInputs={4}
              inputStyles={styles.textInput}
              keyboardType="phone-pad"
              autofillFromClipboard={false}
              handleChange={e => {
                setUserDetails({
                  ...userDetails,
                  otp: e,
                });
                setShowError({
                  ...showError,
                  otp: false,
                });
              }}
            />
            <Text style={styles.receiveText}>
              Didn’t receive the code?
              <Text style={styles.resendText}>Resend</Text>
            </Text>
          </View>

          {showError.otp && (
            <View style={styles.errorContainer}>
              <ErrorIcon
                width={horizontalScale(15)}
                height={verticalScale(15)}
              />
              <Text style={styles.errorText}>{errorMsg.otp}</Text>
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
                Confirm
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default OtpScreen;

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
    borderTopLeftRadius: responsiveBorderRadius(40),
    borderTopRightRadius: responsiveBorderRadius(40),
    paddingHorizontal: pixelSizeHorizontal(20),
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
  inputContainers: {
    // paddingHorizontal: pixelSizeHorizontal(20),
    alignSelf: 'center',
  },
  inputFields: {
    flexDirection: 'row',
    width: width * 0.85,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: pixelSizeVertical(40),
    marginBottom: pixelSizeVertical(15),
  },
  textInput: {
    width: width * 0.18,
    backgroundColor: Colors.inputFieldColor,
    height: height * 0.08,
    elevation: 4,
    borderTopLeftRadius: responsiveBorderRadius(5),
    borderTopRightRadius: responsiveBorderRadius(5),
    color: Colors.inputTextColor,
    textAlign: 'center',
    fontSize: fontPixel(16),
  },
  receiveText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(12),
    color: Colors.headingTextColor,
    textAlign: 'center',
    paddingTop: pixelSizeVertical(20),
  },
  resendText: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(12),
    color: Colors.headingTextColor,
    textDecorationLine: 'underline',
  },
  submitButton: {
    width: width * 0.4,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(5),
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(30),
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
