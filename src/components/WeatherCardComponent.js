import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  ActivityIndicator,
  Platform,
  Dimensions,
  PermissionsAndroid,
  Alert,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import IconStyle from '../assets/styles/IconStyle';
import fontStyling from '../assets/fonts/fontStyling';
import appColors from '../assets/colors/AppColor';
import ContainerStyle from '../assets/styles/ContainerStyle';
import LabelStyle from '../assets/styles/LabelStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WeatherCardComponent = ({navigation, item}) => {
  useEffect(() => {}, []);

  return (
    <View
      style={{
        marginBottom: wp('2%'),
        marginHorizontal: wp('2%'),
        paddingVertical: wp('2%'),
        borderRadius: 5,
        backgroundColor: appColors.cardBlue,
        elevation: 3,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/png/car.png')}
            style={[IconStyle.bikeIcon]}
          />
          <Text
            style={[LabelStyle.weekDaysText]}>
            {' '}
            {item}
          </Text>
        </View>
        <View style={[ContainerStyle.componentColumnContainer]}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/png/rain32.png')}
                style={[IconStyle.weatherIcon]}
              />
              <Text style={[LabelStyle.forecastText]}> 15%</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/png/wind32.png')}
                style={[IconStyle.weatherIcon]}
              />
              <Text style={[LabelStyle.forecastText]}> 6 m/s</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/png/drop32.png')}
                style={[IconStyle.weatherIcon]}
              />
              <Text style={[LabelStyle.forecastText]}> 0.07 in</Text>
            </View>
          </View>
        </View>
        <Text style={[LabelStyle.smallfarenheitText]}>77/53 °F</Text>
      </View>
    </View>
  );
};

export default withNavigation(WeatherCardComponent);
