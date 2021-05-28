import React, {useEffect} from 'react';
import {createAppContainer, withNavigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home/Home';
import Settings from './src/screens/Setting/Settings';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Settings: Settings
  },
  {
    initialRouteName: 'Home',
    headerMode: false,
  },
);

const AppContainer = createAppContainer(AppNavigator);
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppContainer />;
};
export default App;
