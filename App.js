import { createStackNavigator, createAppContainer } from 'react-navigation';

import AppNavigator from './src/navigation/AppNavigator';
import ForgetPassScreen from './src/screens/ForgetPassScreen';
import LoginScreen from './src/screens/LoginScreen';


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
  loginStack: { screen: login },
  mainStack: { screen: main }
},
  {
    initialRouteName: 'loginStack'
  })

export default createAppContainer(myApp);