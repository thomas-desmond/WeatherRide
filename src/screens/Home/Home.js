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
import ContainerStyle from '../../assets/styles/ContainerStyle';
import appColors from '../../assets/colors/AppColor';
import fontStyling from '../../assets/fonts/fontStyling';
import LinearGradient from 'react-native-linear-gradient';
import LabelStyle from '../../assets/styles/LabelStyle';
import IconStyle from '../../assets/styles/IconStyle';
import WeatherCardComponent from '../../components/WeatherCardComponent';
import Modal from 'react-native-modal';
import GeneralProperties from '../../assets/styles/GeneralProperties';
import Entypo from 'react-native-vector-icons/Entypo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const [data, setData] = useState([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    
  }, []);

  return (
    <SafeAreaView style={[ContainerStyle.container]}>
      {Platform.OS == 'ios' ? null : (
        <StatusBar
          hidden={false}
          backgroundColor={appColors.whiteColor}
          barStyle="dark-content"
        />
      )}
      <LinearGradient
        colors={['#76cdfc', '#66b2ff', '#669cff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          paddingHorizontal: wp('5%'),
          paddingVertical: wp('5%'),
          // borderRadius: 5,
        }}>
        <View style={{flexDirection: 'row',alignItems:"center", justifyContent: 'space-between'}}>
          <View style={{flex:1}}>
          </View>
          <View style={{flex:1}}>
          <Text style={[LabelStyle.heading]}>92069</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <Text style={[LabelStyle.smallHeading]}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={{height: 120, width: 120, marginTop: 20}}
            source={require('../../assets/png/nightfullmoonpartialcloud.png')}
          />
          <View style={[ContainerStyle.weatherContainer]}>
            <Text style={[LabelStyle.dailyWeatherText]}>Testing</Text>
            <Text style={[LabelStyle.farenheitText]}>77/53 °F</Text>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(true);
              }}
              style={[ContainerStyle.detailButtonContainer]}>
              <Text style={[LabelStyle.detailButtonText]}>More Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/png/rain32.png')}
            style={[IconStyle.weatherIcon]}
          />
          <Text style={[LabelStyle.forecastText]}> 0%</Text>
          <Image
            source={require('../../assets/png/wind32.png')}
            style={[IconStyle.weatherIcon]}
          />
          <Text style={[LabelStyle.forecastText]}> 1 m/s</Text>
          <Image
            source={require('../../assets/png/drop32.png')}
            style={[IconStyle.weatherIcon]}
          />
          <Text style={[LabelStyle.forecastText]}> 0.00 in</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: wp('3%'),
          }}>
          <Image
            source={require('../../assets/png/bike.png')}
            style={[IconStyle.bikeIcon, {marginLeft: 0}]}
          />
          <Text style={[LabelStyle.ridingForecastText]}>
            {' '}
            Today is a good day to ride!
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={{flex: 1, paddingTop: wp('2%')}}
        colors={['#76cdfc', '#66b2ff', '#669cff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => {
            item.id + '';
          }}
          key={item => {
            item.id + '';
          }}
          renderItem={({item}) => {
            return <WeatherCardComponent key={Math.random()} item={item} />;
          }}
        />
      </LinearGradient>

      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackButtonPress={() => {
          setIsModalVisible(false);
        }}
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}>
        <View style={[ContainerStyle.modalContainer]}>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
            }}
            style={[IconStyle.crossIcon]}>
            <Entypo name="cross" size={25} color={appColors.whiteColor} />
          </TouchableOpacity>
          <Text style={[LabelStyle.modalHeading]}>Today DOSDFSDF</Text>
          <View
            style={[
              GeneralProperties.mt3,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/png/rain32.png')}
                style={[IconStyle.weatherIcon]}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={[LabelStyle.modalForecastText]}> 15%</Text>
                <Text style={[LabelStyle.modalForecastDetailText]}>Rain %</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/png/wind32.png')}
                style={[IconStyle.weatherIcon]}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={[LabelStyle.modalForecastText]}> 6 m/s</Text>
                <Text style={[LabelStyle.modalForecastDetailText]}>
                  Wind Speed
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/png/drop32.png')}
                style={[IconStyle.weatherIcon]}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={[LabelStyle.modalForecastText]}> 0.07 in</Text>
                <Text style={[LabelStyle.modalForecastDetailText]}>
                  Total Rain
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={{
              height: wp('40%'),
              width: wp('40%'),
              resizeMode: 'cover',
              marginTop: wp('5%'),
            }}
            source={require('../../assets/png/daypartialcloud.png')}
          />
          <Text style={[LabelStyle.modalFooterText]}>
            Partly cloudy throughout the day.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 30, width: 30, marginTop: wp('2%')}}
              source={require('../../assets/png/car.png')}
            />
            <Text
              style={[
                LabelStyle.modalFooterText2,
                {marginTop: 10, marginLeft: 5},
              ]}>
              Looks like a car driving day :(
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default withNavigation(Home);
