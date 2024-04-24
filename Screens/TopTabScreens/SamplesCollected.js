import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

const {width, height} = Dimensions.get('window');
const SamplesCollected = () => {
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

  const renderItems = ({item}) => {
    return (
      <View style={styles.cardContainer}>
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
          {/* <View style={styles.trackLocation}>
            <Location width={horizontalScale(20)} height={verticalScale(20)} />
            <Text style={styles.trackLocationText}>Track location</Text>
          </View> */}
        </View>
      </View>
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

export default SamplesCollected;

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
  // trackLocation: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // trackLocationText: {
  //   fontFamily: FontFamily.regular,
  //   fontSize: fontPixel(14),
  //   color: Colors.headingTextColor,
  //   textDecorationLine: 'underline',
  // },
});
