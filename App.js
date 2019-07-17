import { createStackNavigator, createAppContainer } from 'react-navigation';

import AppNavigator from './src/navigation/AppNavigator';
import ForgetPassScreen from './src/screens/ForgetPassScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';


const login = createStackNavigator({
  Login: { screen: LoginScreen },
  ForgetPass: { screen: ForgetPassScreen }
},
  {
    navigationOptions: ({ header: null })
  })

const main = createStackNavigator({
  Main: {
    screen: AppNavigator,
    navigationOptions: ({ navigation }) => ({ header: null })
  }
},
  {
    navigationOptions: ({ header: null })
  }
)

const myApp = createStackNavigator({
  splashScreen:{screen: SplashScreen},
  loginStack: { screen: login },
  mainStack: { screen: main }
},
  {
    initialRouteName: 'splashScreen'
  })

export default createAppContainer(myApp);