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
import CheckIcon from '../../assets/images/checkIcon.svg';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const SampleCollectedModal = props => {
  const {onPressOK, title, showConfirmModal, onPressOut, onPressOkButton} =
    props;

  const handleContentClick = event => {
    event.stopPropagation();
  };
  
  return (
    <Modal visible={showConfirmModal} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={onPressOut}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={handleContentClick}>
            <View style={styles.modalContent}>
              <CheckIcon
                width={horizontalScale(45)}
                height={verticalScale(45)}
              />
              <Text style={styles.successText}>Successful</Text>
              <Text style={styles.signOutText2}>
                Sample Collected successfully!
              </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={onPressOkButton}>
                <LinearGradient
                  start={{x: 0.5, y: 0}}
                  end={{x: 0.5, y: 1}}
                  locations={[0.0, 1.0]}
                  style={styles.gradeintButton}
                  colors={[
                    Colors.primaryButtonColor1,
                    Colors.primaryButtonColor2,
                  ]}>
                  <Text style={styles.loginText}>Ok</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SampleCollectedModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: Colors.defaultWhiteBackgroundColor,
    borderRadius: 10,
    // height: 230,
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
  },
  successText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(22),
    paddingVertical: pixelSizeVertical(5),
    textAlign: 'center',
    width: width * 0.65,
  },
  signOutText2: {
    fontSize: fontPixel(18),
    color: Colors.headingTextColor,
    textAlign: 'center',
    paddingVertical: pixelSizeVertical(5),
    paddingHorizontal: pixelSizeHorizontal(5),
    fontFamily: FontFamily.regular,
  },
  loginButton: {
    width: width * 0.18,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveBorderRadius(5),
    alignSelf: 'center',
    marginBottom: pixelSizeVertical(20),
    marginTop: pixelSizeVertical(10)
  },
  gradeintButton: {
    width: width * 0.18,
    height: verticalScale(50),
    borderRadius: responsiveBorderRadius(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.defaultWhiteBackgroundColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
  },
});
