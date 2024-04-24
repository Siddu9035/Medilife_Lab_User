import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { horizontalScale, verticalScale } from '../../styles/Dimensions';


const Loader = () => {
  return (
    <SafeAreaView style={styles.Loader}>
      <Image
        source={require('../../assets/images/loader.gif')}
        style={{
          width: horizontalScale(100),
          height: verticalScale(100),
        }}
      />
    </SafeAreaView>
  );
};

export default Loader;
const styles = StyleSheet.create({
  Loader: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 5,
  },
});
