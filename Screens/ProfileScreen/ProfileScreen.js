import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../styles/Colors';
import ArrorLeft from '../../assets/images/arrowLeft.svg';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../../styles/Dimensions';
import FontFamily from '../../styles/FontFamily';
import MessageIcon from '../../assets/images/messageBox.svg';
import LocationIcon from '../../assets/images/location.svg';
import PhoneIcon from '../../assets/images/phone.svg';
import LinearGradient from 'react-native-linear-gradient';
import SignOutModal from '../Components/SignOutModal';

const {width, height} = Dimensions.get('window');
const ProfileScreen = ({navigation}) => {
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const validColors = [Colors.primaryButtonColor1, Colors.primaryButtonColor2];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrorLeft width={horizontalScale(28)} height={verticalScale(28)} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <Text style={styles.ProfileName}>John Doe</Text>
      <View style={styles.subContainer}>
        <View style={styles.mailContainer}>
          <MessageIcon width={horizontalScale(38)} height={verticalScale(38)} />
          <Text style={styles.mailText}>johndoe92@gmail.com</Text>
        </View>
        <View style={styles.phoneContainer}>
          <PhoneIcon width={horizontalScale(38)} height={verticalScale(38)} />
          <Text style={styles.phoneText}>+91 98765 43210</Text>
        </View>
        <View style={styles.locationContainer}>
          <LocationIcon
            width={horizontalScale(38)}
            height={verticalScale(38)}
          />
          <Text style={styles.locationText}>
            51725 Swaniawski Curve, Gigifort, New York, 62799
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() => {
              setShowSignOutModal(true);
            }}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              locations={[0.0, 1.0]}
              style={styles.gradeintButton}
              colors={validColors}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <SignOutModal
        showConfirmModal={showSignOutModal}
        onPressOut={() => {
          setShowSignOutModal(false);
        }}
        onPressSignOutButton={() => {
          setShowSignOutModal(false);
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: pixelSizeVertical(20),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  profileText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
    paddingLeft: pixelSizeHorizontal(8),
  },
  backButton: {
    padding: 8,
  },
  ProfileName: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
    textAlign: 'center',
    paddingBottom: pixelSizeVertical(28),
  },
  subContainer: {
    flex: 1,
    backgroundColor: Colors.defaultWhiteBackgroundColor,
    borderTopLeftRadius: responsiveBorderRadius(32),
    borderTopRightRadius: responsiveBorderRadius(32),
  },
  mailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingTop: pixelSizeVertical(60),
  },
  mailText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
    paddingLeft: pixelSizeHorizontal(16),
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingTop: pixelSizeVertical(60),
  },
  phoneText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
    paddingLeft: pixelSizeHorizontal(16),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(60),
    width: width,
  },
  locationText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
    paddingLeft: pixelSizeHorizontal(16),
    textAlign: 'left',
    width: width * 0.6,
  },
  signOutButton: {
    width: width * 0.3,
    height: verticalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: responsiveBorderRadius(5),
  },
  gradeintButton: {
    width: width * 0.3,
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveBorderRadius(5),
  },
  signOutText: {
    color: Colors.defaultWhiteBackgroundColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: pixelSizeVertical(60),
  },
});
