import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  ActivityIndicator,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import Slider from '@react-native-community/slider';
import ContainerStyle from '../../assets/styles/ContainerStyle';
import appColors from '../../assets/colors/AppColor';
import LinearGradient from 'react-native-linear-gradient';
import fontStyling from '../../assets/fonts/fontStyling';
import LabelStyle from '../../assets/styles/LabelStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Settings = ({navigation}) => {
  const [location, onChangeLocation] = useState("");
  const [maxRideTemp, onMaxRideTempChange] = useState("34");
  const [minRideTemp, onMinRideTempChange] = useState("12");
  const [maxRainPercent, onMaxRainPercentChange] = useState("");
  const [maxRainInches, onMaxRainInchesChange] = useState("");


  return (
    <SafeAreaView
      style={[
        ContainerStyle.container,
        {backgroundColor: appColors.mediumGrey},
      ]}>
      {Platform.OS == 'ios' ? null : (
        <StatusBar
          hidden={false}
          backgroundColor={appColors.whiteColor}
          barStyle="dark-content"
        />
      )}
      <View style={[ContainerStyle.header]}>
        <View style={{flex: 1}}> 
        <TouchableOpacity style={[ContainerStyle.saveButtonContainer]}>
          <Text style={[LabelStyle.saveButtonText]}>Save</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex: 1,marginLeft:-wp('15')}}>

        <Text style={[LabelStyle.settingsHeading]}>Settings</Text>
        </View>
        
      </View>


      <Text style={[LabelStyle.locationHeading]}>LOCATION</Text>
      <View style={[ContainerStyle.whiteBarContainer]}>
        <Text style={[LabelStyle.locationText]}>Location</Text>
        <TextInput style={[LabelStyle.locationText]} value={location} onChangeText={onChangeLocation} placeholder="zip or city"/>
      </View>

      <Text style={[LabelStyle.locationHeading]}>TEMPERATURES</Text>
      <View style={{backgroundColor: appColors.whiteColor}}>
        <View style={[ContainerStyle.whiteBarContainer]}>
          <Text style={[LabelStyle.locationText]}>Max Riding Temp</Text>
          <TextInput style={[LabelStyle.locationText]} value={maxRideTemp} onChangeText={onMaxRideTempChange}/>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: appColors.mediumGrey,
            marginHorizontal: wp('5.5%'),
          }}
        />
        <View style={[ContainerStyle.whiteBarContainer]}>
          <Text style={[LabelStyle.locationText]}>Min Riding Temp</Text>
          <TextInput style={[LabelStyle.locationText]} value={minRideTemp} onChangeText={onMinRideTempChange}/>
        </View>
      </View>
      <Text style={[LabelStyle.locationHeading]}>RAIN</Text>
      <View style={{backgroundColor: appColors.whiteColor}}>
        <View style={[ContainerStyle.whiteBarRangeContainer]}>
          <Text style={[LabelStyle.rainText]}>
            Max Allowable Rain Percentage (%)
          </Text>
          <Text style={[LabelStyle.rainText]}>5%</Text>
        </View>
          <Slider
            style={{width: wp('96%'), marginHorizontal: wp('2%'), marginVertical: wp('4%')}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor= {appColors.lightBlue}
            maximumTrackTintColor= {appColors.grey}
          />
        <View
          style={{
            borderWidth: 1,
            borderColor: appColors.mediumGrey,
            marginHorizontal: wp('5.5%'),
          }}
        />
        <View style={[ContainerStyle.whiteBarRangeContainer]}>
          <Text style={[LabelStyle.rainText]}>
            Max Allowable Rain in Inches
          </Text>
          <Text style={[LabelStyle.rainText]}>1.0 inches</Text>
        </View>
        <Slider
            style={{width: wp('96%'), marginHorizontal: wp('2%'), marginVertical: wp('4%')}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor= {appColors.lightBlue}
            maximumTrackTintColor= {appColors.grey}
          />
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(Settings);
