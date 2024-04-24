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
import FontFamily from '../../styles/FontFamily';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../../styles/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import CloseEye from '../../assets/images/closeEye.svg';
import OpenEye from '../../assets/images/openEye.svg';
import ErrorIcon from '../../assets/images/errorIcon.svg';

const {width, height} = Dimensions.get('window');

const LoginPage = ({navigation}) => {
  const [hidePass, setHidePass] = useState(false);
  const [userDetails, setUserDetails] = useState({
    password: '',
    email: '',
  });

  const [errorMsg, setErrorMsg] = useState({
    password: '',
    email: '',
  });

  const [showError, setShowError] = useState({
    password: null,
    email: null,
  });

  const emailRegex = /^\S+@\S+\.\S{2,3}$/;
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

  const isFormValid = () => {
    return (
      emailRegex.test(userDetails.email) &&
      passwordPattern.test(userDetails.password)
    );
  };

  const notValidcolors = [
    'rgba(221, 221, 221, 1)',
    'rgba(221, 221, 221, 1)',
    'rgba(214, 214, 214, 1)',
    'rgba(172, 172, 172, 1)',
  ];

  const validColors = ['rgba(0, 231, 206, 1)', 'rgba(0, 170, 151, 1)'];

  const handleButtonClick = () => {
    if (!emailRegex.test(userDetails.email)) {
      setErrorMsg({
        ...errorMsg,
        email: 'The entered email has not been registered',
      });
      setShowError({...showError, email: true});
    } else if (!passwordPattern.test(userDetails.password)) {
      setErrorMsg({...errorMsg, password: 'The entered password is incorrect'});
      setShowError({...showError, password: true});
    } else {
      setShowError({
        ...showError,
        password: false,
        email: false,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Login.png')}
        resizeMode="stretch"
        style={styles.ImageBackground}>
        <ScrollView contentContainerStyle={styles.subContainer}>
          <Text style={styles.welocomeText}>Welcome,</Text>
          <Text style={styles.signInText}>sign in to continue</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.emailInput,
                {
                  borderBottomWidth: showError.email ? 1 : 0,
                  borderColor: showError.email ? '#FF0000' : '#fff',
                },
              ]}
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
            //   onBlur={() => {
            //     if (!emailRegex.test(userDetails.email)) {
            //       setErrorMsg({
            //         ...errorMsg,
            //         email: 'The entered email has not been registered',
            //       });
            //       setShowError({...showError, email: true});
            //     } else {
            //       setErrorMsg({
            //         ...errorMsg,
            //         email: '',
            //       });
            //       setShowError({...showError, email: false});
            //     }
            //   }}
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
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[
                  styles.passwordIput,
                  {
                    borderBottomWidth: showError.password ? 1 : 0,
                    borderColor: showError.password ? '#FF0000' : '#ffff',
                  },
                ]}
                placeholder="Password"
                placeholderTextColor={'#00C6B0'}
                secureTextEntry={!hidePass}
                onChangeText={e => {
                  setUserDetails({
                    ...userDetails,
                    password: e,
                  });
                  setShowError({
                    ...showError,
                    password: false,
                  });
                }}
              />
              <TouchableOpacity
                style={styles.eyeContainer}
                onPress={() => {
                  setHidePass(!hidePass);
                }}>
                {hidePass ? (
                  <OpenEye
                    width={horizontalScale(25)}
                    height={verticalScale(25)}
                  />
                ) : (
                  <CloseEye
                    width={horizontalScale(25)}
                    height={verticalScale(25)}
                  />
                )}
              </TouchableOpacity>
            </View>
            {showError.password && (
              <View style={styles.errorContainer}>
                <ErrorIcon
                  width={horizontalScale(15)}
                  height={verticalScale(15)}
                />
                <Text style={styles.errorText}>{errorMsg.password}</Text>
              </View>
            )}
            <Text
              onPress={() => {
                navigation.navigate('Forgot');
              }}
              style={styles.forgotPassText}>
              Forgot password
            </Text>

            <TouchableOpacity
              style={styles.loginButton}
              disabled={!isFormValid()}
              onPress={() => {
                handleButtonClick();
              }}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 0.0}}
                locations={isFormValid() ? [0, 0.0] : [0, 0.0, 0.0, 0]}
                style={styles.gradeintButton}
                colors={isFormValid() ? validColors : notValidcolors}>
                <Text
                  style={[
                    styles.loginText,
                    {color: isFormValid() ? '#0E4B67' : '#888888'},
                  ]}>
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  ImageBackground: {
    height: height,
  },
  subContainer: {
    paddingHorizontal: pixelSizeHorizontal(20),
    justifyContent: 'center',
    height: height * 0.8,
  },
  welocomeText: {
    color: '#F4F4F4',
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(30),
  },
  signInText: {
    color: '#F4F4F4',
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(25),
  },
  inputContainer: {
    paddingTop: pixelSizeVertical(50),
  },
  emailInput: {
    width: width * 0.9,
    height: height * 0.075,
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: responsiveBorderRadius(4),
    borderTopRightRadius: responsiveBorderRadius(4),
    paddingHorizontal: pixelSizeHorizontal(15),
    marginVertical: pixelSizeVertical(10),
    elevation: 8,
    color: '#1D1B20',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eyeContainer: {
    position: 'absolute',
    right: pixelSizeHorizontal(20),
    bottom: pixelSizeVertical(30),
  },
  passwordIput: {
    width: width * 0.9,
    height: height * 0.075,
    backgroundColor: '#FBFBFB',
    borderTopLeftRadius: responsiveBorderRadius(4),
    borderTopRightRadius: responsiveBorderRadius(4),
    paddingLeft: pixelSizeHorizontal(15),
    paddingRight: pixelSizeHorizontal(55),
    marginTop: pixelSizeVertical(25),
    marginBottom: pixelSizeVertical(10),
    color: '#1D1B20',
    elevation: 8,
  },
  forgotPassText: {
    color: '#F4F4F4',
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(12),
    textAlign: 'right',
    paddingRight: pixelSizeHorizontal(4),
  },
  loginButton: {
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
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(12),
    paddingLeft: pixelSizeHorizontal(4),
  },
});
