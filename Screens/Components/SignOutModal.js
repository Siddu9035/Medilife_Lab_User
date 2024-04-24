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
import SignOutIcon from '../../assets/images/signOut.svg';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const SignOutModal = props => {
  const {onPressOK, title, showConfirmModal, onPressOut, onPressSignOutButton} =
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
              <SignOutIcon
                width={horizontalScale(45)}
                height={verticalScale(45)}
              />
              <Text style={styles.signOutText}>
                Are you sure you want to sign out?
              </Text>
              <Text style={styles.signOutText2}>
                Your account history will not be saved, and you will be redirect
                to the Welcome Page.
              </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={onPressSignOutButton}>
                <LinearGradient
                 start={{x: 0.5, y: 0}}
                 end={{x: 0.5, y: 1}}
                 locations={[0.0, 1.0]}
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

export default SignOutModal;

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
  signOutText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
    paddingVertical: pixelSizeVertical(10),
    textAlign: 'center',
    width: width * 0.65,
  },
  signOutText2: {
    fontSize: fontPixel(16),
    color: Colors.headingTextColor,
    textAlign: 'center',
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(5)
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
