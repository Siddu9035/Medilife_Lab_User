import {
  Dimensions,
  FlatList,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';
import {
  fontPixel,
  horizontalScale,
  pixelSizeHorizontal,
  pixelSizeVertical,
  responsiveBorderRadius,
  verticalScale,
} from '../../styles/Dimensions';
import FontFamily from '../../styles/FontFamily';
import Location from '../../assets/images/locationIcon.svg';

const {width, height} = Dimensions.get('window');
const NewRequest = ({navigation}) => {
  const data = [
    {
      bloodType: 'Complete Blood Count (CBC)',
      date: '27th Mar 2024, 12 mins ago',
      slotSchedule: '28th Mar 2024 01:00pm - 02:00pm',
      name: 'John Doe',
      email: 'johndoe.1989@gmail.com',
      phoneNumber: '+91 98765 43210',
      orderId: 'Order#000112',
    },
    {
      bloodType: 'Thyroid Function Test (TFT)',
      date: '27th Mar 2024, 12 mins ago',
      slotSchedule: '28th Mar 2024 01:00pm - 02:00pm',
      name: 'John Doe',
      email: 'johndoe.1989@gmail.com',
      phoneNumber: '+91 98765 43210',
      orderId: 'Order#000112',
    },
    {
      bloodType: 'Lipid Profile',
      date: '27th Mar 2024, 12 mins ago',
      slotSchedule: '28th Mar 2024 01:00pm - 02:00pm',
      name: 'John Doe',
      email: 'johndoe.1989@gmail.com',
      phoneNumber: '+91 98765 43210',
      orderId: 'Order#000112',
    },
  ];
  const handleButtonClick = item => {
    navigation.navigate('OrderDetail');
  };
  const openGoogleMap = () => {
    const latitude = '12.977439';
    const longitude = '77.570839';
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          handleButtonClick(item);
        }}>
        <View style={styles.requestTypeContainer}>
          <Text style={styles.bloodType}>{item.bloodType}</Text>
          <View>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.orderIdText}>{item.orderId}</Text>
          </View>
        </View>
        <View style={styles.scheduleContainer}>
          <Text
            style={
              styles.slotScheduleText
            }>{`Slot Schedule\n${item.slotSchedule}`}</Text>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.emailText}>{item.email}</Text>
        </View>
        <View style={styles.phoneAndLocationContainer}>
          <Text style={styles.phoneNumberText}>{item.phoneNumber}</Text>
          <View style={styles.trackLocation}>
            <Location width={horizontalScale(20)} height={verticalScale(20)} />
            <Text
              style={styles.trackLocationText}
              onPress={() => {
                openGoogleMap();
              }}>
              Track location
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderItems}
          style={{
            marginTop: pixelSizeVertical(20),
            marginBottom: pixelSizeVertical(5),
          }}
        />
      </View>
    </View>
  );
};

export default NewRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: width * 0.9,
    backgroundColor: Colors.inputFieldColor,
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(10),
    borderRadius: responsiveBorderRadius(12),
    paddingVertical: pixelSizeVertical(20),
    elevation: 5,
  },
  requestTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingTop: pixelSizeVertical(10),
  },
  bloodType: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(18),
    width: width * 0.4,
  },
  dateText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(10),
  },
  orderIdText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(14),
    paddingTop: pixelSizeVertical(10),
    textAlign: 'right',
  },
  scheduleContainer: {
    // width: width * 0.5,
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  slotScheduleText: {
    color: Colors.headingTextColor,
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(12),
    paddingVertical: pixelSizeVertical(8),
  },
  emailText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
  },
  nameText: {
    fontFamily: FontFamily.medium,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
  },
  phoneAndLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(8),
  },
  phoneNumberText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
  },
  trackLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackLocationText: {
    fontFamily: FontFamily.regular,
    fontSize: fontPixel(14),
    color: Colors.headingTextColor,
    textDecorationLine: 'underline',
  },
});
