import {Alert} from 'react-native';
import {BackHandler} from 'react-native';

const exitAlert = () => {
  Alert.alert(
    'Thoát',
    'Bạn có muốn thoát khỏi ứng dụng ?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => BackHandler.exitApp()},
    ],
    {cancelable: false},
  );
}
export {exitAlert};


const handleAndroidBackButton = callBack => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    callBack();
    return true;
  });
};
/**
 * Removes the event listener in order not to add a new one
 * every time the view component re-mounts
 */
const removeAndroidBackButtonHandler = () => {
  BackHandler.removeEventListener('hardwareBackPress', () => {});
}
export {handleAndroidBackButton, removeAndroidBackButtonHandler};