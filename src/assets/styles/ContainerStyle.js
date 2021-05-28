import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../colors/AppColor';
import GeneralProperties from './GeneralProperties';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContainerStyle = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingHorizontal: wp('10%'),
    backgroundColor: appColors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  containerFluid: {
    flex: 1,
    backgroundColor: appColors.whiteColor,
  },
  weatherContainer: {
    flexDirection: 'column',
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentColumnContainer: {
    flexDirection: 'column',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailButtonContainer: {
    paddingHorizontal: wp('5%'),
    backgroundColor: appColors.whiteColor,
    borderRadius: 20,
  },
  modalContainer: {
    padding: hp('3%'),
    backgroundColor: appColors.lightBlue,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: appColors.whiteColor,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveButtonContainer: {
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.lightGrey,
    borderRadius: 4,
    width:wp("20")
  },
  whiteBarContainer: {
    paddingVertical: wp('4%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: appColors.whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  whiteBarRangeContainer: {
    paddingTop: wp('4%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: appColors.whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default ContainerStyle;
