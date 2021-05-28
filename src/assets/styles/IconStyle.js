import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../colors/AppColor';

const IconStyle = StyleSheet.create({
  backbuttonIcon: {
    marginVertical: hp('2'),
    marginHorizontal: wp('3'),
    color: '#FFFFFF',
  },
  weatherIcon: {
    height: 20, 
    width: 20, 
    marginLeft: 15
  },
  modalWeatherIcon: {
    height: 30, 
    width: 30, 
    marginLeft: 15
  },
  bikeIcon: {
    height: 30, 
    width: 30, 
    marginLeft: 15
  },
  crossIcon : {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 10,
    right: 10,
  }
});

export default IconStyle;
