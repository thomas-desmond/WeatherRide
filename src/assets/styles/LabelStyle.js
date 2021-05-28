import {StyleSheet, Dimensions, Alert, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../colors/AppColor';
import fontStyling from '../fonts/fontStyling';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LabelStyle = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  heading: {
    fontFamily: fontStyling.semiBold.fontFamily,
    color: appColors.whiteColor,
    alignItems: 'center',
    fontSize: windowWidth <= 360 ? wp('5%') : wp('5.2%'),
  },
  smallHeading: {
    fontFamily: fontStyling.semiBold.fontFamily,
    color: appColors.whiteColor,
    alignItems: 'center',
  },
  dailyWeatherText: {
    fontFamily: fontStyling.semiBold.fontFamily,
    color: appColors.whiteColor,
    alignItems: 'center',
    fontSize: windowWidth <= 360 ? wp('4%') : wp('4.2%'),
  },
  farenheitText: {
    fontFamily: fontStyling.semiBold.fontFamily,
    color: appColors.whiteColor,
    alignItems: 'center',
    fontSize: windowWidth <= 360 ? wp('9.5%') : wp('9.7%'),
  },
  smallfarenheitText: {
    marginHorizontal: wp('3%'),
    fontFamily: fontStyling.semiBold.fontFamily,
    color: appColors.whiteColor,
    alignItems: 'center',
    fontSize: windowWidth <= 360 ? wp('6%') : wp('6.2%'),
  },
  forecastText: {
    color: appColors.whiteColor,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('4%') : wp('4.2%'),
    marginTop: 3,
  },
  modalForecastText: {
    color: appColors.black,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('4%') : wp('4.2%'),
    marginTop: 3,
  },
  modalForecastDetailText: {
    color: appColors.black,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('3%') : wp('3.2%'),
    marginTop: 3,
  },
  modalFooterText: {
    color: appColors.black,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('5%') : wp('5.2%'),
    textAlign: 'center',
  },
  modalFooterText2: {
    color: appColors.black,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('4.5%') : wp('4.7%'),
    textAlign: 'center',
  },
  ridingForecastText: {
    color: appColors.whiteColor,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('4.5%') : wp('4.7%'),
    marginTop: 3,
  },
  detailButtonText: {
    color: appColors.black,
    fontFamily: fontStyling.semiBold.fontFamily,
    fontSize: windowWidth <= 360 ? wp('3.5%') : wp('3.7%'),
    marginTop: 3,
  },
  modalHeading: {
    color: appColors.black,
    fontFamily: fontStyling.semiBold.fontFamily,
    fontSize: windowWidth <= 360 ? wp('5%') : wp('5.2%'),
    marginTop: 3,
  },
  saveButtonText: {
    color: appColors.blue,
    fontFamily: fontStyling.semiBold.fontFamily,
    marginTop: 3,
    fontSize: windowWidth <= 360 ? wp('3.5%') : wp('3.7%'),
  },
  settingsHeading: {
    color: appColors.black,
    fontFamily: fontStyling.semiBold.fontFamily,
    marginTop: 3,
    fontSize: windowWidth <= 360 ? wp('4%') : wp('4.2%'),
  },
  locationHeading: {
    color: appColors.darkGrey,
    fontFamily: fontStyling.regular.fontFamily,
    marginTop: wp('6%'),
    marginHorizontal: wp('5%'),
    fontSize: windowWidth <= 360 ? wp('3.7%') : wp('3.9%'),
  },
  locationText: {
    color: appColors.black,
    fontFamily: fontStyling.regular.fontFamily,
    marginTop: 3,
    fontSize: windowWidth <= 360 ? wp('3.5%') : wp('3.7%'),
  }, 
  rainText: {
    color: appColors.black,
    fontFamily: fontStyling.regular.fontFamily,
    marginTop: 3,
    fontSize: windowWidth <= 360 ? wp('3.5%') : wp('3.7%'),
  },
  weekDaysText: {
    color: appColors.whiteColor,
    fontFamily: fontStyling.regular.fontFamily,
    fontSize: windowWidth <= 360 ? wp('4.5%') : wp('4.7%'),
    marginTop: 3,
  }
});

export default LabelStyle;
