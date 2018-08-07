import MainScreen from './components/MainScreen';
import ChatScreen from './components/ChatScreen';

import { createStackNavigator } from 'react-navigation'

const navigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  ChatScreen: { screen: ChatScreen },
});

export default navigator