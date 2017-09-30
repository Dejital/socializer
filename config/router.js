import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../components/Home';
import Details from '../components/Details';
import Settings from '../components/Settings';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Contacts'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="people" size={35} color={tintColor} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Preferences',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
    }
  }
});
