import {
    Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../../styles/Dimensions';
import FontFamily from '../../styles/FontFamily';
import Lock from '../../assets/images/lock.svg';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const PasswordChangedModal = props => {
  const {onPressOK, title, showConfirmModal, onPressOut, onPressLoginButton} =
    props;

  const handleContentClick = event => {
    event.stopPropagation();
  };
  const validColors = [Colors.buttonGradient1, Colors.buttonGradient2];
  return (
    <Modal visible={showConfirmModal} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={onPressOut}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={handleContentClick}>
            <View style={styles.modalContent}>
              <Lock width={horizontalScale(38)} height={verticalScale(38)} />
              <Text style={styles.passwordChangedText}>Password changed!</Text>
              <Text style={styles.successfullPasswordChangeText}>
                Your password has been changed successfully!
              </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={onPressLoginButton}>
                <LinearGradient
                  start={{x: 0.0, y: 0.0}}
                  end={{x: 0.0, y: 0.0}}
                  locations={[0, 0.0]}
                  style={styles.gradeintButton}
                  colors={validColors}>
                  <Text style={styles.loginText}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PasswordChangedModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // height: 230,
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
  },
  passwordChangedText: {
    color: Colors.error2,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(22),
    paddingVertical: pixelSizeVertical(10),
  },
  successfullPasswordChangeText: {
    fontSize: fontPixel(16),
    color: Colors.headingTextColor,
    textAlign: 'center',
    paddingVertical: pixelSizeVertical(10),
  },
  loginButton: {
    width: width * 0.4,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(5),
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(20),
  },
  gradeintButton: {
    width: width * 0.4,
    height: verticalScale(50),
    borderRadius: responsiveBorderRadius(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
  },
});
