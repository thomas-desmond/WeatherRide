import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from '../colors/AppColor';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NavigationCardstyle = StyleSheet.create({
    ProfileScreenCard: {
        backgroundColor: appColors.whiteColor,
        height: windowWidth <= 360 ? hp('9%') : hp('9%'),
        borderRadius:10, 
        flexDirection:"row",
        shadowColor: appColors.primary,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 7.49,
        elevation: 1,
        marginVertical: 6,
        paddingHorizontal: wp('5%')
    },
})
export default NavigationCardstyle;