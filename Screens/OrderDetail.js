import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ArrowLeft from '../assets/images/arrowLeft.svg';
import FontFamily from '../styles/FontFamily';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../styles/Dimensions';
import Colors from '../styles/Colors';
import MessageIcon from '../assets/images/message.svg';
import PhoneIcon from '../assets/images/phoneIcon.svg';
import LocationIcon from '../assets/images/locationIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import SampleCollectedModal from './Components/SampleCollectedModal';

const {width, height} = Dimensions.get('window');
const OrderDetail = ({navigation}) => {
  const [showSuccessfullModal, setShowSuccessfullModal] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <ArrowLeft width={horizontalScale(30)} height={verticalScale(30)} />
        </TouchableOpacity>
        <Text style={styles.orderText}>Order detail</Text>
      </View>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Text style={styles.customerName}>John Doe, 31 yrs</Text>
        <View style={styles.emailContainer}>
          <MessageIcon width={horizontalScale(24)} height={verticalScale(24)} />
          <Text style={styles.emailText}>johndoe.1989@gmail.com</Text>
        </View>
        <View style={styles.phoneContainer}>
          <PhoneIcon width={horizontalScale(24)} height={verticalScale(24)} />
          <Text style={styles.phoneText}>+91 98765 43210</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.locationContainer}>
          <LocationIcon
            width={horizontalScale(24)}
            height={verticalScale(24)}
          />
          <Text style={styles.locationText}>
            Park water tank, 2nd Stage, Vijayanagar 4th Stage, Vijayanagar,
            Mysuru, Karnataka
          </Text>
        </View>
        <Text style={styles.textDetailsText}>Test details</Text>
        <Text style={styles.slotTime}>
          Slot Schedule
          <Text style={styles.slotDate}>
            {' '}
            - 28th Mar 2024 | 01:00pm - 02:00pm
          </Text>
        </Text>
        <Text style={styles.testType}>Complete Blood Count (CBC)</Text>
        <Text style={styles.testDesc}>
          Lorem ipsum dolor sit amet consectetur. Eget diam pharetra euismod nam
          enim pulvinar tincidunt sollicitudin. Tincidunt fermentum feugiat et
          suscipit venenatis. Massa odio nunc risus vitae egestas malesuada nunc
          ut. Porttitor faucibus consectetur id odio purus vestibulum
          consectetur semper at.
        </Text>
        <Text style={styles.sampleText}>Samples required</Text>
        <Text style={styles.typeText}>Blood</Text>
        <Text style={styles.testInclude}>Tests included (4)</Text>
        <Text style={styles.mcvText}>MCV</Text>
        <View style={styles.line}></View>
        <Text style={styles.mcvText}>MCH</Text>
        <View style={styles.line}></View>
        <Text style={styles.mcvText}>MCHC</Text>
        <View style={styles.line}></View>
        <Text style={styles.mcvText}>Total WBC count</Text>
        <View style={styles.line}></View>
        {hideButton && (
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() => {
              setShowSuccessfullModal(true);
            }}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              locations={[0.0, 1.0]}
              style={styles.gradeintButton}
              colors={[Colors.primaryButtonColor1, Colors.primaryButtonColor2]}>
              <Text style={styles.signOutText}>Samples Collected</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}

        <SampleCollectedModal
          showConfirmModal={showSuccessfullModal}
          onPressOut={() => {
            setShowSuccessfullModal(false);
          }}
          onPressOkButton={() => {
            setHideButton(false);
            setShowSuccessfullModal(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: pixelSizeVertical(20),
  },
  arrowIcon: {
    padding: 8,
  },
  orderText: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(21),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(10),
  },
  customerName: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(10),
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(16),
  },
  emailText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(15),
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(16),
  },
  phoneText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(15),
  },
  line: {
    width: width * 0.9,
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(10),
    opacity: 0.1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(16),
    width: width * 0.9,
  },
  locationText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(15),
    width: width * 0.79,
  },
  textDetailsText: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(16),
  },
  slotTime: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
    paddingVertical: pixelSizeVertical(8),
    paddingLeft: pixelSizeHorizontal(16),
  },
  slotDate: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
  },
  testType: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(16),
    color: Colors.headingTextColor,
    paddingLeft: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(8),
  },
  testDesc: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(15),
    color: Colors.headingTextColor,
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  sampleText: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
    color: Colors.headingTextColor,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(8),
  },
  typeText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(15),
    color: Colors.headingTextColor,
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  testInclude: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(20),
    color: Colors.headingTextColor,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(16),
  },
  mcvText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(15),
    color: Colors.headingTextColor,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(10),
  },
  signOutButton: {
    width: width * 0.45,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: responsiveBorderRadius(5),
    marginVertical: pixelSizeVertical(10),
  },
  gradeintButton: {
    width: width * 0.45,
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveBorderRadius(5),
    marginVertical: pixelSizeVertical(10),
  },
  signOutText: {
    color: Colors.defaultWhiteBackgroundColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(16),
  },
});
