import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../colors/AppColor';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardStyle = StyleSheet.create({
    navigationCardStyle: {
        backgroundColor: appColors.whiteColor,
        height: windowWidth <= 360 ? hp('9%') : hp('9%'),
        borderRadius:15,
        elevation: 1,
    },
    withoutNavCardStyle: {
        backgroundColor: appColors.whiteColor,
        height: windowWidth <= 360 ? hp('10%') : hp('10.5%'),
        borderRadius:10,
        elevation:0.5
    },
    modalCard: {
        backgroundColor: appColors.whiteColor,
        width:320,
        borderRadius:15,
        paddingHorizontal: wp('5%'),
        paddingVertical: wp('5%'),
    },
    generalCardStyle: {
        backgroundColor: appColors.whiteColor,
        borderRadius: 20,
        elevation: 0.8
    }

})
export default CardStyle;