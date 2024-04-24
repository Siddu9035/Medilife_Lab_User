import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Arrowleft from '../../assets/images/arrowLeft.svg';
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
import OpenEye from '../../assets/images/openEye.svg';
import CloseEye from '../../assets/images/closeEye.svg';
import LinearGradient from 'react-native-linear-gradient';
import ErrorIcon from '../../assets/images/error2.svg';
import PasswordChangedModal from '../Components/PasswordChangedModal';

const {width, height} = Dimensions.get('window');
const CreateNewPassWord = ({navigation}) => {
  const [hidePass, setHidePass] = useState(false);
  const [confirmHidePass, setConfirmHidePass] = useState(false);
  const [showPasswordChangedModal, setShowPasswordChangedModal] =
    useState(false);
  console.log(
    '🚀 ~ CreateNewPassWord ~ showPasswordChangedModal:',
    showPasswordChangedModal,
  );
  const [userDetails, setUserDetails] = useState({
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState({
    password: '',
    confirmPassword: '',
  });

  const [showError, setShowError] = useState({
    password: false,
    confirmPassword: false,
  });
  const notValidcolors = [
    Colors.linearGradient1,
    Colors.linearGradient2,
    Colors.linearGradient3,
    Colors.linearGradient4,
  ];
  const validColors = [Colors.primaryButtonColor1, Colors.primaryButtonColor2];
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

  const isFormValid = () => {
    return (
      userDetails.password !== '' && userDetails.confirmPassword.trim() !== ''
    );
  };

  const handleButtonClick = () => {
    if (!passwordPattern.test(userDetails.password.trim())) {
      setErrorMsg({
        ...errorMsg,
        password:
          'Password must be 8 characters long, maximum 20 characters, containing at least one uppercase letter, one lowercase letter, one special character, and one numeric digit.',
      });
      setShowError({
        ...showError,
        password: true,
      });
    } else if (userDetails.password !== userDetails.confirmPassword.trim()) {
      setErrorMsg({
        ...errorMsg,
        confirmPassword: 'The entered password doesn’t match',
      });
      setShowError({
        ...showError,
        confirmPassword: true,
      });
    } else {
      setShowError({
        ...showError,
        confirmPassword: false,
      });
      setShowError({
        ...showError,
        password: false,
      });
      setShowPasswordChangedModal(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.goBack();
        }}>
        <Arrowleft width={horizontalScale(30)} height={verticalScale(30)} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.createText}>Create new password</Text>
          <Text style={styles.newPassText}>
            Your new password must be different from the previous password you
            used.
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor={Colors.placeHolderTextColor}
              secureTextEntry={!hidePass}
              value={userDetails.password}
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
              style={styles.passwordHideButton}
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
          <View style={styles.confirmPassContainer}>
            <TextInput
              style={[
                styles.confirmPassInput,
                {
                  borderColor: showError.confirmPassword ? Colors.error2 : null,
                  borderBottomWidth: showError.confirmPassword ? 1 : 0,
                },
              ]}
              placeholder="ConfirmPassword"
              placeholderTextColor={Colors.placeHolderTextColor}
              secureTextEntry={!confirmHidePass}
              value={userDetails.confirmPassword}
              onChangeText={e => {
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e,
                });
                setShowError({
                  ...showError,
                  confirmPassword: false,
                });
              }}
            />
            <TouchableOpacity
              style={styles.confirmPasswordHideButton}
              onPress={() => {
                setConfirmHidePass(!confirmHidePass);
              }}>
              {confirmHidePass ? (
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
          {showError.confirmPassword && (
            <View style={styles.errorContainer}>
              <ErrorIcon
                width={horizontalScale(15)}
                height={verticalScale(15)}
              />
              <Text style={styles.errorText}>{errorMsg.confirmPassword}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.resetButton}
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
                  styles.resetText,
                  {
                    color: isFormValid()
                      ? Colors.textColor
                      : Colors.disablebuttonColor,
                  },
                ]}>
                Reset password
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <PasswordChangedModal
          showConfirmModal={showPasswordChangedModal}
          onPressOut={() => {
            setShowPasswordChangedModal(false);
          }}
          onPressLoginButton={() => {
            setShowPasswordChangedModal(false)
            navigation.navigate('Login')
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewPassWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColor,
    paddingTop: pixelSizeVertical(20),
  },
  header: {
    padding: 8,
    alignSelf: 'flex-start',
    marginHorizontal: pixelSizeHorizontal(10),
  },
  mainContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    flexGrow: 1,
  },
  textContainer: {
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
  },
  createText: {
    fontSize: fontPixel(20),
    fontFamily: FontFamily.medium,
    color: Colors.headingTextColor,
  },
  newPassText: {
    fontSize: fontPixel(15),
    fontFamily: FontFamily.regular,
    color: Colors.headingTextColor,
    paddingTop: pixelSizeVertical(10),
    lineHeight: fontPixel(24),
  },
  subContainer: {
    flex: 1,
    // height: height,
    backgroundColor: Colors.defaultWhiteBackgroundColor,
    borderTopLeftRadius: responsiveBorderRadius(36),
    borderTopRightRadius: responsiveBorderRadius(36),
    marginTop: pixelSizeVertical(20),
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  passwordContainer: {
    paddingTop: pixelSizeVertical(40),
    // paddingHorizontal: pixelSizeHorizontal(20)
    alignSelf: 'center',
  },
  passwordInput: {
    width: width * 0.9,
    backgroundColor: Colors.inputFieldColor,
    height: height * 0.08,
    elevation: 8,
    color: Colors.inputTextColor,
    borderTopRightRadius: responsiveBorderRadius(5),
    borderTopLeftRadius: responsiveBorderRadius(5),
    paddingLeft: pixelSizeHorizontal(20),
  },
  passwordHideButton: {
    position: 'absolute',
    right: pixelSizeHorizontal(20),
    bottom: pixelSizeVertical(25),
  },
  confirmPassContainer: {
    paddingTop: pixelSizeVertical(40),
    // paddingHorizontal: pixelSizeHorizontal(20)
    alignSelf: 'center',
  },
  confirmPassInput: {
    width: width * 0.9,
    backgroundColor: Colors.inputFieldColor,
    height: height * 0.08,
    elevation: 8,
    color: Colors.inputTextColor,
    borderTopRightRadius: responsiveBorderRadius(5),
    borderTopLeftRadius: responsiveBorderRadius(5),
    paddingLeft: pixelSizeHorizontal(20),
  },
  confirmPasswordHideButton: {
    position: 'absolute',
    right: pixelSizeHorizontal(20),
    bottom: pixelSizeVertical(25),
  },
  resetButton: {
    width: width * 0.5,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(5),
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(30),
  },
  gradeintButton: {
    width: width * 0.5,
    height: verticalScale(50),
    borderRadius: responsiveBorderRadius(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetText: {
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
    paddingVertical: pixelSizeVertical(5),
  },
});
